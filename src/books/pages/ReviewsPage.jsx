import { NavLink, Outlet, Link } from 'react-router-dom'

import styles from '../styles/ReviewsPage.module.css'

export const ReviewsPage = () => {
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
