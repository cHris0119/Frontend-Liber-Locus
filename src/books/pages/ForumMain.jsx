import { NavLink, Outlet, useParams } from 'react-router-dom'

import { BackButton, CreateDiscussion, ForumMainHeader, Loader } from '../components'

import { useForumStore } from '../../hooks'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import styles from '../styles/ForumMain.module.css'

export const ForumMain = () => {
  const [members, setMembers] = useState([])
  const { id } = useParams()
  const { user } = useSelector(state => state.auth)
  const inForum = members.find(member => member.id === user.id)
  const { startLoadingForums } = useForumStore()
  const { isLoadingForums, forumList } = useSelector(state => state.forum)

  const forum = forumList.find(forum => forum.id === Number(id))
  console.log(forum)

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
      <ForumMainHeader
      setMembers = {setMembers}
      members = {members}
      inForum = {inForum}
      forum={forum} />

        <div className={styles.ForumMainContent}>

      { inForum
        ? (
          <>
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
          </>
          )

        : <h3 className={styles.notInForum}>
         Necesitas unirte al foro para poder ver el contenido
         </h3>
         }
      </div>

    </div>
  )
}
