import styles from './ProfileHeader.module.css'

export const ProfileHeader = () => {
  const handleClick = () => {

  }

  return (
    <header className={styles.accountHeader}>

            <section className={styles.headerLeft}>
                <div className={styles.headerContainerImg}>
                    <img
                    src='asd' alt="img-user" />
                </div>
            </section>

            <section className={styles.headerRight}>
                <h1>nombre user</h1>
                <div className={styles.userFollowers}>
                    <p><span>100</span> seguidores</p>
                    <p><span>5</span> seguidos</p>
                </div>
                <button
                className={styles.followButton}
                onClick={handleClick}
                >Seguir
                </button>
            </section>

    </header>
  )
}
