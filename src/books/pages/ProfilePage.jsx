import { ProfileHeader } from '../components/ProfileHeader/ProfileHeader'
import styles from '../styles/ProfilePage.module.css'

export const ProfilePage = () => {
  return (
    <div className={styles.accountPage}>
      <ProfileHeader />

        <div className={styles.accountBottom}>

          {/* <section className={styles.selectSection}>
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
          </section> */}

          {/* <section className={styles.accountContent}>
              <Outlet />
          </section> */}

        </div>
    </div>
  )
}
