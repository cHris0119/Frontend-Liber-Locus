import { ForumCard } from '../ForumCard/ForumCard'
import styles from './ForumList.module.css'

export const ForumList = () => {
  const arr = [1, 2, 3, 4]
  return (
    <div className={styles.forumListContainer}>
        {arr.map((foro) => (
            <ForumCard key={foro} />
        ))}
    </div>
  )
}
