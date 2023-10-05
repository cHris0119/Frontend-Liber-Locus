import { useParams } from 'react-router-dom'
import { BackButton, Loader, StarRatingWithoutChange } from '../components'

import { useSelector } from 'react-redux'
import { useReviewStore } from '../../hooks'
import { useEffect } from 'react'

import styles from '../styles/ReviewDetail.module.css'

export const ReviewDetail = () => {
  const { reviewList, isLoadingReview } = useSelector(state => state.review)
  const { id } = useParams()
  const { startLoadingReviews } = useReviewStore()

  const review = reviewList.find(review => review.id === Number(id))

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

  return (
    <div className={styles.reviewDetailContainer}>
      <BackButton />
        <div className={styles.container}>

        <div className={styles.userContainer}>

          <div className={styles.imgContainer}>
            <img src="https://a.ltrbxd.com/resized/avatar/upload/1/2/0/3/7/7/7/shard/avtr-0-1000-0-1000-crop.jpg?v=ff62b2f12e" alt="userIMG" />
          </div>
          <div className={styles.userInfo}>
            <p>Publicada hace 3 horas</p>
            <p>Por <span>UserName</span></p>
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
          <button>Like</button>
          <span>10 likes</span>
          </div>
        </div>

        </div>

    </div>
  )
}
