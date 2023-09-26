import { Link } from 'react-router-dom'

import styles from './MyReview.module.css'

export const MyReview = () => {
  return (
    <>
    <article className={styles.myPost}>

      <div className={styles.articleImgContainer}>
        <img src="" alt="img-review" />
      </div>

      <div className={styles.articleContent}>
        <div className={styles.articleDetails}>
            <p>Dracula</p>
            <p>Calificación: ⭐⭐⭐</p>
            <p>Publicado hace: 2d</p>
        </div>
        <div className={styles.articleActions}>
          <button><Link to='/editarReview'>Editar</Link></button>
          <button>Eliminar</button>
        </div>
      </div>

    </article>

  </>
  )
}
