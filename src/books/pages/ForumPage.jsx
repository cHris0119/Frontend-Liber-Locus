import { NavLink, Outlet } from 'react-router-dom'
import { ForumHeader } from '../components/ForumHeader/ForumHeader'

import styles from '../styles/ForumPage.module.css'

export const ForumPage = () => {
  return (
    <div className={styles.forumContainer}>
      <h1 style={{ color: '#fff', textAlign: 'center', borderBottom: '2px solid #fff', paddingBottom: '20px', display: 'inline-block' }}>FOROS</h1>
        <ForumHeader />

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
  )
}
