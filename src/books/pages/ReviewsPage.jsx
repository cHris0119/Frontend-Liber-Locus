import { NavLink, Outlet, Link } from 'react-router-dom'

import styles from '../styles/ReviewsPage.module.css'
import { useEffect } from 'react'
import { useReviewStore } from '../../hooks'
import { useSelector } from 'react-redux'
import { Loader } from '../components'

export const ReviewsPage = () => {
  const { startLoadingReviews } = useReviewStore()
  const { isLoadingReview } = useSelector(state => state.review)

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
    <div className={styles.reviewPageContainer}>

        <section className={styles.createButton}>
          <Link to={'/crearReseña'}>
            Crear Reseña
          </Link>
        </section>

        <section className={styles.selectSection}>

            <NavLink
            to={'populares'}
            className={({ isActive }) => (isActive ? styles.active : '')}
            >Populares</NavLink>

            <NavLink
            to={'recientes'}
            className={({ isActive }) => (isActive ? styles.active : '')
            }>Recientes</NavLink>

            <NavLink
            to={'paraTi'}
            className={({ isActive }) => (isActive ? styles.active : '')
            }>Para ti</NavLink>

        </section>

        <Outlet />

    </div>
  )
}
