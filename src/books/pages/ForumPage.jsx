import { NavLink, Outlet } from 'react-router-dom'
import { ForumHeader } from '../components/ForumHeader/ForumHeader'

import styles from '../styles/ForumPage.module.css'

export const ForumPage = () => {
  return (
    <div className={styles.forumContainer}>
        <ForumHeader />
        <div className={styles.forumMain}>

        <section className={styles.selectSection}>

              <NavLink
              to={'ultimosPost'}
              className={({ isActive }) => (isActive ? styles.active : '')}
              >Ultimas publicaciones</NavLink>

              <NavLink
              to={'paraTi'}
              className={({ isActive }) => (isActive ? styles.active : '')
              }>Para ti</NavLink>

              <NavLink
              to={'listaForos'}
              className={({ isActive }) => (isActive ? styles.active : '')
              }>Foros</NavLink>

          </section>

          <div className={styles.forumContent}>
            <Outlet />
          </div>

        </div>
    </div>
  )
}
