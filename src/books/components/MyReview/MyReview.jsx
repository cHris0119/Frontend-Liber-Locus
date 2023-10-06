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
          const fechaActual = new Date()
          const fechaReview = new Date(review.created_at)
          const diferencia = fechaActual - fechaReview
          const segundos = Math.floor(diferencia / 1000)
          const minutos = Math.floor(segundos / 60)
          const horas = Math.floor(minutos / 60)
          const dias = Math.floor(horas / 24)
          return (
    <article key={review.id} className={styles.myPost}>

      <div className={styles.articleImgContainer}>
        <img src="" alt="img-review" />
      </div>

      <div className={styles.articleContent}>
        <div className={styles.articleDetails}>
            <p>{review.title}</p>
            <StarRatingWithoutChange numStar={review.valoration} />
            <p>Publicado hace: {dias < 1 ? '' : ` ${dias} días`} {horas < 1 ? 'Menos de una hora' : ` ${horas} horas`}</p>
        </div>
        <div className={styles.articleActions}>
          <button><Link to={`/editarReview/${review.id}`}>Editar</Link></button>
          <button onClick={() => handleDelete(review.id)}>Eliminar</button>
        </div>
      </div>

    </article>

          )
        }))
      : (<h2 className={styles.noFound}>No tienes reviews</h2>)}

  </>
  )
}
