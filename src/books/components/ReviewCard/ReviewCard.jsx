import { Link } from 'react-router-dom'

import { StarRatingWithoutChange } from '../StarRating/StarRating'

import styles from './ReviewCard.module.css'

export const ReviewCard = ({ reviews }) => {
  // const completeName = `${review.user.first_name} ${review.user.last_name}`

  return (
    <>
      {reviews?.map((review) => {
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

                </h2>
                <p className={styles.user}>
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
