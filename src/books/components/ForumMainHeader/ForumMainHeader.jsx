import { AiFillSetting } from 'react-icons/ai'

import styles from './ForumMainHeader.module.css'
import { Link } from 'react-router-dom'

export const ForumMainHeader = ({ forum }) => {
  return (
    <header className={styles.header}>

    <div className={styles.containerImg}>
      <img src="https://espacio.fundaciontelefonica.com/wp-content/uploads/2019/04/portada-tema-librerias-1100x550.jpg" alt="forumPortada" />
    </div>

    <div className={styles.forumDetails}>

        <div className={styles.forumDetailsTitle}>

          <div className={styles.leftHeader}>
            <h1>{forum.name}</h1>
            <button className={styles.forumDetailsButton}>
                Unirse
            </button>
          </div>

              <Link to={`/editarForo/${forum.id}`}>
            <button className={styles.configButton}>
              <AiFillSetting />
              Configuración
            </button>
              </Link>

        </div>

        <p><span>1000</span> miembros</p>

    </div>

  </header>
  )
}
