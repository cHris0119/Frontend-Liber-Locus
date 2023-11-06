import { ReviewCard } from '../ReviewCard/ReviewCard'
import styles from './ReviewsList.module.css'

export const ReviewsList = ({ reviewList }) => {
  const hasReview = reviewList.length > 0
  console.log(reviewList)
  return (
    <>
    {hasReview
      ? (
      <div className={styles.reviewsListContainer}>
        <ReviewCard
        reviews = {reviewList}
        />
      </div>
        )
      : (
        <div className={styles.NoFoundContainer}>
          <h2 className={styles.noFound}>No se encuentran reseñas...</h2>
        </div>
        )}
</>
  )
}
