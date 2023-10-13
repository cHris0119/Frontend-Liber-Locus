import { NavLink, Outlet, useParams } from 'react-router-dom'

import { BackButton, CreateDiscussion, ForumMainHeader, Loader } from '../components'

import styles from '../styles/ForumMain.module.css'
import { useForumStore } from '../../hooks'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export const ForumMain = () => {
  const { id } = useParams()
  const { startLoadingForums } = useForumStore()
  const { isLoadingForums, forumList } = useSelector(state => state.forum)

  const forum = forumList.find(forum => forum.id === Number(id))

  useEffect(() => {
    startLoadingForums()
  }, [])

  if (isLoadingForums === true) {
    return (
      <div style={{ height: '100vh' }}>
      <Loader />
      </div>
    )
  }
  return (
    <div className={styles.ForumMainContainer}>
      <BackButton />
      <ForumMainHeader forum={forum} />

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
