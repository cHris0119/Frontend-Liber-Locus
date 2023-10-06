import { useEffect } from 'react'
import { EditReviewForm, Loader } from '../components'
import styles from '../styles/EditReview.module.css'
import { useSelector } from 'react-redux'
import { useReviewStore } from '../../hooks'

export const EditReview = () => {
  const { startLoadingReviews } = useReviewStore()
  const { isLoadingReview, reviewList } = useSelector(state => state.review)

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

    <div className={styles.editAccountContainer}>

      <EditReviewForm reviews = {reviewList} />

    </div>

  )
}
