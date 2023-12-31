import { Link, useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useReviewStore } from '../../hooks'
import { useEffect, useState } from 'react'
import { RiUserVoiceFill } from 'react-icons/ri'

import { BackButton, Loader, StarRatingWithoutChange } from '../components'
import { WS_URL } from '../../helpers/constWS'

import booksApi from '../../api/booksApi'

import styles from '../styles/ReviewDetail.module.css'

export const ReviewDetail = () => {
  const location = useLocation()
  const { reviewList, isLoadingReview } = useSelector(state => state.review)
  const { user } = useSelector(state => state.auth)
  const [likes, setLikes] = useState({})
  const [voiceOn, setVoiceOn] = useState(false)
  const { id } = useParams()
  const { startLoadingReviews } = useReviewStore()
  const [websocket, setWebsocket] = useState(null)

  const review = reviewList.find(review => review.id === Number(id))

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))

    const config = {
      headers: {
        Authorization: `Token ${token}`
      }
    }
    const getLikes = async () => {
      try {
        const likes = await booksApi.get(`api/reviews/reviews_likes/${id}/`, config)
        const data = likes.data
        setLikes(data)
      } catch (error) {
        console.log(error)
      }
    }
    getLikes()

    const websocket = new WebSocket(`ws://${WS_URL}/ws/consumer/likes/`)

    websocket.onmessage = async (event) => {
      const data = await JSON.parse(event.data)
      console.log(likes)
      setLikes(data)
    }

    websocket.onerror = (error) => {
      console.error('WebSocket error:', error)
    }

    setWebsocket(websocket)
  }, [])

  useEffect(() => {
    const unlisten = () => {
      if (voiceOn) {
        const synthesis = window.speechSynthesis
        synthesis.cancel()
        setVoiceOn(false)
      }
    }

    return () => {
      unlisten()
    }
  }, [location, voiceOn])

  useEffect(() => {
    startLoadingReviews()
  }, [location.pathname])

  if (isLoadingReview === true) {
    return (
      <div style={{ height: '100vh' }}>
      <Loader />
      </div>
    )
  }

  //* websocket
  const handleLike = () => {
    const dataToSend = {
      action: 'like',
      id: user.id,
      review_id: id
    }

    if (websocket.readyState === WebSocket.OPEN) {
      websocket.send(JSON.stringify(dataToSend))
    }
  }

  //* Voice
  const handleVoice = () => {
    if ('speechSynthesis' in window) {
      const synthesis = window.speechSynthesis

      if (synthesis.speaking && voiceOn) {
        synthesis.cancel()
        setVoiceOn(false)
      } else {
        const mensaje = new SpeechSynthesisUtterance()
        mensaje.text = review.description
        mensaje.lang = 'es-ES'
        mensaje.rate = 1.0

        mensaje.onend = () => {
          setVoiceOn(false)
        }

        synthesis.speak(mensaje)
        setVoiceOn(true)

        window.addEventListener('beforeunload', () => {
          synthesis.cancel()
          setVoiceOn(false)
        })
      }
    } else {
      console.log('Tu navegador no admite sintesis de voz')
    }
  }

  window.addEventListener('beforeunload', () => websocket.close())

  const fullName = `${review.user.first_name} ${review.user.last_name}`

  return (
    <div className={styles.reviewDetailContainer}>
      <BackButton />
        <div className={styles.container}>

        <div className={styles.userContainer}>

          <div className={styles.imgContainer}>
          </div>
          <div className={styles.userInfo}>

            <p>Por <Link to={`/usuario/${review.user.id}`}>{fullName}</Link></p>
          </div>

        </div>

        <div className={styles.reviewContainer}>

          <div className={styles.bookDetails}>

            <div className={styles.bookImg}>
              <img
              src={review.review_img ? `data:image/${review.format};base64,${review.review_img}` : '/public/not-found.jpg'}
              alt="bookImg" />
            </div>
            <div className={styles.bookInfo}>
              <h1>{review.title}</h1>
              <StarRatingWithoutChange numStar={review.valoration} />

            </div>

          </div>

          <p className={styles.description}>
            {review.description}
          </p>

          <div className={styles.footer}>

          <div className={styles.likeButton}>

          <button onClick={handleLike}>
            {likes.user_like ? 'Ya no me gusta' : 'Me gusta'}
          </button>

          <span>
            { Object.entries(likes).length === 0

              ? 'Cargando'
              : `${likes.likes > 0 ? likes.likes : 0} me gusta`

            }
          </span>

          </div>

          <div className={styles.voiceButtonContainer}>
            <>
            <button
            onClick={handleVoice}
            className={styles.voiceButton}>
              <RiUserVoiceFill />
            </button>

            <span>
              { voiceOn ? 'Cancelar' : 'Escuchar reseña'}
            </span>

              </>
          </div>

          </div>

        </div>

        </div>

    </div>
  )
}
