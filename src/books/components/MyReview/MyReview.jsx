import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { useReviewStore } from '../../../hooks'
import { Loader, StarRatingWithoutChange } from '../'

import styles from './MyReview.module.css'

export const MyReview = () => {
  const { user } = useSelector(state => state.auth)
  const { reviewList, isLoadingReview } = useSelector(state => state.review)
  const { startLoadingReviews, startDeletingReview } = useReviewStore()

  const myReviews = reviewList.filter((review) => review.user.id === user.id)
  const hasReview = myReviews.length > 0

  console.log(myReviews)

  const handleDelete = async (id) => {
    const confirmacion = confirm('Estas seguro que quieres eliminar esta reseña?')
    if (confirmacion) {
      await startDeletingReview(id)
      console.log('Eliminado')
    } else {
      console.log('cancelado')
    }
  }

  useEffect(() => {
    startLoadingReviews()
  }, [])

  if (isLoadingReview === true) {
    return (
      <div style={{ height: '100%' }}>
      <Loader />
      </div>
    )
  }

  return (
    <>
    {hasReview
      ? (myReviews?.map((review) => {
          return (
    <article key={review.id} className={styles.myPost}>

      <div className={styles.articleImgContainer}>
        <img
        src={review.review_img ? `data:image/${review.format};base64,${review.review_img}` : '/public/not-found.jpg'}
        alt="img-review" />
      </div>

      <div className={styles.articleContent}>
        <div className={styles.articleDetails}>
            <p>{review.title}</p>
            <StarRatingWithoutChange numStar={review.valoration} />
        </div>
        <div className={styles.articleActions}>
          <button><Link to={`/editarReview/${review.id}`}>Editar</Link></button>
          <button onClick={() => handleDelete(review.id)}>Eliminar</button>
        </div>
      </div>

    </article>

          )
        }))
      : (<h2 className={styles.noFound}>No tienes reseñas</h2>)}

  </>
  )
}
