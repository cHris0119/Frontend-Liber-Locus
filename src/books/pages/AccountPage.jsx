import { AccountHeader } from '../components'
import { NavLink, Outlet } from 'react-router-dom'

import styles from '../styles/AccountPage.module.css'

export const AccountPage = () => {
  return (
    <div className={styles.accountPage}>
        <AccountHeader />

        <div className={styles.accountBottom}>

          <section className={styles.selectSection}>
              <NavLink
              to={'misPost'}
              className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Publicaciones
              </NavLink>

              <NavLink
              to={'misSubastas'}
              className={({ isActive }) => (isActive ? styles.active : '')
              }>
                Mis subastas
              </NavLink>

              <NavLink
              to={'misReseñas'}
              className={({ isActive }) => (isActive ? styles.active : '')
              }>
                Mis reseñas
              </NavLink>
          </section>

          <section className={styles.accountContent}>
              <Outlet />
          </section>

        </div>
    </div>
  )
}
