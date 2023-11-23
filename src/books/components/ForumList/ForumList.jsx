import { Link } from 'react-router-dom'
import { ForumCard } from '../ForumCard/ForumCard'

import { useForumStore } from '../../../hooks/useForumStore'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Loader } from '../Loader/Loader'

import styles from './ForumList.module.css'

export const ForumList = () => {
  const { user } = useSelector(state => state.auth)
  const { startLoadingForums } = useForumStore()
  const { isLoadingForums, forumList } = useSelector(state => state.forum)

  console.log(forumList)

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
    <>
      {user.subscription !== 1
        ? (
        <section className={styles.createButton}>
          <Link to={'/crearForo'}>
          Crear foro
          </Link>
        </section>
          )
        : null}
    <div className={styles.forumListContainer}>
        <div className={styles.forumList}>
            {forumList.map((foro) => (
              <ForumCard key={foro.id} foro={foro} />
            ))}
        </div>
    </div>
              </>
  )
}
