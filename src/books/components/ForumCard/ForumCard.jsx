import { Link } from 'react-router-dom'
import styles from './ForumCard.module.css'

export const ForumCard = () => {
  return (
    <article className={styles.forumCard}>

        <div className={styles.forumDetails}>

            <div className={styles.imgContainer}>
                <img src="https://styles.redditmedia.com/t5_2qh9i/styles/communityIcon_j68bk74k14o01.png" alt="forumImg" />
            </div>

            <div className={styles.foroInfo}>
                <h2><Link to='/foro/foro1'>Foro 1</Link></h2>
                <p><span>100</span> Miembros</p>
            </div>

        </div>

        <button className={styles.unirseButton}>Unirse</button>

    </article>
  )
}
