import { Link } from 'react-router-dom'

import { StarRatingWithoutChange } from '../StarRating/StarRating'

import styles from './ReviewCard.module.css'

export const ReviewCard = ({ reviews }) => {
  // const completeName = `${review.user.first_name} ${review.user.last_name}`

  return (
    <>
      {reviews?.map((review) => {
        // const fechaActual = new Date()
        // const fechaReview = new Date(review.created_at)
        // const diferencia = fechaActual - fechaReview
        // const segundos = Math.floor(diferencia / 1000)
        // const minutos = Math.floor(segundos / 60)
        // const horas = Math.floor(minutos / 60)
        // const dias = Math.floor(horas / 24)

        return (
          <Link key={review.id} to={`/detalleReseña/${review.id}`}>
            <article className={styles.reviewCardContainer}>
              <div className={styles.left}>
                <div className={styles.imgContainer}>
                  <img
                  src={review.review_img ? `data:image/${review.format};base64,${review.review_img}` : '/public/not-found.jpg'}
                  alt="bookImg" />
                </div>
              </div>

              <div className={styles.right}>
                <h2>{review.title}
                {/* <span>· hace {dias < 1 ? '' : ` ${dias} días`} {horas < 1 ? 'Menos de una hora' : ` ${horas} horas`}</span> */}
                </h2>
                <p className={styles.user}>
                  {/* {completeName} */}
                </p>
                <StarRatingWithoutChange numStar={review.valoration} />
                <p className={styles.description}>
                  {review.description}
                </p>

                {/* <span className={styles.likes}>❤️ 10.000 Likes</span> */}
              </div>
            </article>
          </Link>
        )
      })}
    </>

  )
}
