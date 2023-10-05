import { Link } from 'react-router-dom'

import { StarRatingWithoutChange } from '../StarRating/StarRating'

import styles from './ReviewCard.module.css'

export const ReviewCard = ({ review }) => {
  // const completeName = `${review.user.first_name} ${review.user.last_name}`
  return (
    <>
    {review?.map((review) => (

    <Link
    key={review.id}
    to={`/detalleReseña/${review.id}`}>
      <article className={styles.reviewCardContainer}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <img src="https://images.cdn3.buscalibre.com/fit-in/360x360/6f/b4/6fb45c30bd70046fc578acd09cda2c42.jpg" alt="bookImg" />
            </div>
        </div>

        <div className={styles.right}>
            <h2>{review.title} <span>· hace 4d</span></h2>
            <p className={styles.user}>
              {/* {completeName} */}
            </p>
              <StarRatingWithoutChange numStar={review.valoration} />
            <p className={styles.description}>
            {review.description}
              </p>

            <span className={styles.likes}>❤️ 10.000 Likes</span>
        </div>

      </article>
    </Link>
    ))}
    </>

  )
}
