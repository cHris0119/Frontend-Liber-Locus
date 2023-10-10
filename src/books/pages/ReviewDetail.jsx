import { useParams } from 'react-router-dom'
import { BackButton, Loader, StarRatingWithoutChange } from '../components'

import { useSelector } from 'react-redux'
import { useReviewStore } from '../../hooks'
import { useEffect, useState } from 'react'

import styles from '../styles/ReviewDetail.module.css'
import booksApi from '../../api/booksApi'

export const ReviewDetail = () => {
  const { reviewList, isLoadingReview } = useSelector(state => state.review)
  const { user } = useSelector(state => state.auth)
  const [likes, setLikes] = useState(0)
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
    startLoadingReviews()
  }, [])

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
    const websocket = new WebSocket('ws://localhost:8000/LB_API/consumer/likes')

    websocket.onopen = () => {
      websocket.send(JSON.stringify(dataToSend))
    }

    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data)
      console.log('Received data from server:', data)
      setLikes(data.likes)
      websocket.close()
    }

    websocket.onerror = (error) => {
      console.error('WebSocket error:', error)
    }

    websocket.onclose = () => {
      console.log('WebSocket closed')
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
            <p>Por <span>{fullName}</span></p>
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

          <p className={styles.description}>{review.description}</p>

          <div className={styles.likeButton}>
          <button onClick={handleLike}>Like</button>
          <span>{likes.likes} likes</span>
          </div>
        </div>

        </div>

    </div>
  )
}
