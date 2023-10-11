import { Link } from 'react-router-dom'
import { ForumCard } from '../ForumCard/ForumCard'

import styles from './ForumList.module.css'
import { useForumStore } from '../../../hooks/useForumStore'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Loader } from '../Loader/Loader'

export const ForumList = () => {
  const { startLoadingForums, forumList } = useForumStore()
  const { isLoadingForums } = useSelector(state => state.forum)

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
    <div className={styles.forumListContainer}>

        <section className={styles.createButton}>
          <Link to={'/crearForo'}>
            Crear foro
          </Link>
        </section>

        <div className={styles.forumList}>
            {forumList.map((foro) => (
              <ForumCard key={foro} foro={foro} />
            ))}
        </div>
    </div>
  )
}
