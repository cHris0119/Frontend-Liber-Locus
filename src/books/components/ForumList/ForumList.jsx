import { Link } from 'react-router-dom'
import { ForumCard } from '../ForumCard/ForumCard'

import { useForumStore } from '../../../hooks/useForumStore'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Loader } from '../Loader/Loader'

import styles from './ForumList.module.css'

export const ForumList = () => {
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
    <div className={styles.forumListContainer}>

        <section className={styles.createButton}>
          <Link to={'/crearForo'}>
            Crear foro
          </Link>
        </section>

        <div className={styles.forumList}>
            {forumList.map((foro) => (
              <ForumCard key={foro.id} foro={foro} />
            ))}
        </div>
    </div>
  )
}
