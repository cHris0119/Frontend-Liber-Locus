import { Link } from 'react-router-dom'
import styles from './ForumCard.module.css'

export const ForumCard = ({ foro }) => {
  return (
    <article className={styles.forumCard}>

        <div className={styles.forumDetails}>

            <div className={styles.imgContainer}>
                <img
                src={foro.forum_img ? `data:image/${foro.format};base64,${foro.forum_img}` : '/public/not-found.jpg'}
                alt={foro.name} />
            </div>

            <div className={styles.foroInfo}>
                <h2><Link to={`/foro/${foro.id}/ultimasDiscusiones`}>{foro.name}</Link></h2>
            </div>

        </div>

        {/* <button className={styles.unirseButton}>Unirse</button> */}

    </article>
  )
}
