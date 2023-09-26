import { ReviewCard } from '../ReviewCard/ReviewCard'
import styles from './ReviewsList.module.css'

export const ReviewsList = () => {
  const reviews = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div className={styles.reviewsListContainer}>

      { reviews.map((review) => (
        <ReviewCard key={review} />
      )) }

    </div>
  )
}
