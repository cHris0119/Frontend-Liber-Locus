import { NavLink, Outlet } from 'react-router-dom'

import { BackButton, CreateDiscussion, ForumMainHeader } from '../components'

import styles from '../styles/ForumMain.module.css'

export const ForumMain = () => {
  return (
    <div className={styles.ForumMainContainer}>
      <BackButton />
      <ForumMainHeader />

      <div className={styles.ForumMainContent}>

       <CreateDiscussion />

       <div className={styles.ForumMainFilter}>
          <NavLink
          to='ultimasDiscusiones'
          className={({ isActive }) => isActive ? styles.active : ''}>Ultimas discusiones</NavLink>
          <NavLink
          to='misDiscusiones'
          className={({ isActive }) => isActive ? styles.active : ''}>Mis Discusiones</NavLink>
       </div>

       <div>
          <Outlet />
       </div>

      </div>
    </div>
  )
}
