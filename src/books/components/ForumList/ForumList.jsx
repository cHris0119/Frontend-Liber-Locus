import { Link } from 'react-router-dom'
import { ForumCard } from '../ForumCard/ForumCard'

import styles from './ForumList.module.css'

export const ForumList = () => {
  const arr = [1, 2, 3, 4]
  return (
    <div className={styles.forumListContainer}>

        <section className={styles.createButton}>
          <Link to={'/crearForo'}>
            Crear foro
          </Link>
        </section>

        <div className={styles.forumList}>
            {arr.map((foro) => (
              <ForumCard key={foro} />
            ))}
        </div>
    </div>
  )
}
