import styles from './ForumMainHeader.module.css'

export const ForumMainHeader = () => {
  return (
    <header className={styles.header}>

    <div className={styles.containerImg}>
      <img src="https://espacio.fundaciontelefonica.com/wp-content/uploads/2019/04/portada-tema-librerias-1100x550.jpg" alt="forumPortada" />
    </div>

    <div className={styles.forumDetails}>

        <div className={styles.forumDetailsTitle}>
            <h1>Foro 1</h1>
            <button className={styles.forumDetailsButton}>
                Unirse
            </button>
        </div>

        <p><span>1000</span> miembros</p>

    </div>

  </header>
  )
}
