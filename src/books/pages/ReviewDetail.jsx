import { Link, useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useReviewStore } from '../../hooks'
import { useEffect, useState } from 'react'
import { RiUserVoiceFill } from 'react-icons/ri'

import { BackButton, Loader, StarRatingWithoutChange } from '../components'
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
    const websocket = new WebSocket('ws://localhost:8000/ws/consumer/likes/')

    websocket.onopen = () => {
      console.log('wb abierto')
      websocket.send(JSON.stringify(dataToSend))
    }

    websocket.onmessage = async (event) => {
      const data = await JSON.parse(event.data)
      console.log(likes)
      setLikes(data)
      websocket.close()
    }

    websocket.onerror = (error) => {
      console.error('WebSocket error:', error)
    }

    websocket.onclose = () => {
      console.log('WebSocket closed')
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

  const fullName = `${review.user.first_name} ${review.user.last_name}`

  const fechaActual = new Date()
  const fechaReview = new Date(review.created_at)
  const diferencia = fechaActual - fechaReview
  const segundos = Math.floor(diferencia / 1000)
  const minutos = Math.floor(segundos / 60)
  const horas = Math.floor(minutos / 60)
  const dias = Math.floor(horas / 24)

  return (
    <div className={styles.reviewDetailContainer}>
      <BackButton />
        <div className={styles.container}>

        <div className={styles.userContainer}>

          <div className={styles.imgContainer}>
            <img src="https://a.ltrbxd.com/resized/avatar/upload/1/2/0/3/7/7/7/shard/avtr-0-1000-0-1000-crop.jpg?v=ff62b2f12e" alt="userIMG" />
          </div>
          <div className={styles.userInfo}>
            <p>Publicada hace
              {dias < 1 ? '' : ` ${dias} dias`} {horas < 1 ? 'Menos de una hora' : ` ${horas} horas`}
              </p>
            <p>Por <Link to={`/usuario/${review.user.id}`}>{fullName}</Link></p>
          </div>

        </div>

        <div className={styles.reviewContainer}>

          <div className={styles.bookDetails}>

            <div className={styles.bookImg}>
              <img src="https://images.cdn3.buscalibre.com/fit-in/360x360/6f/b4/6fb45c30bd70046fc578acd09cda2c42.jpg" alt="bookImg" />
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
