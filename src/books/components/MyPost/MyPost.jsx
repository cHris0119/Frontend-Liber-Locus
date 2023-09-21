import { Link } from 'react-router-dom'
import styles from './MyPost.module.css'

export const MyPost = () => {
  return (
    <>
      <article className={styles.myPost}>

        <div className={styles.articleImgContainer}>
          <img src="" alt="img-post" />
        </div>

        <div className={styles.articleContent}>
          <div className={styles.articleDetails}>
              <p>Dracula</p>
              <p>5000 CLP</p>
              <p>Publicado hace: 2d</p>
          </div>
          <div className={styles.articleActions}>
            <button><Link to='/editarPost'>Editar</Link></button>
            <button>Eliminar</button>
          </div>
        </div>

      </article>

    </>
  )
}
