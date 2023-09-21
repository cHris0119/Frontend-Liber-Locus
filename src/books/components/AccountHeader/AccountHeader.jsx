import { useNavigate } from 'react-router-dom'

import styles from './AccountHeader.module.css'

export const AccountHeader = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/editarPerfil')
  }

  return (
    <header className={styles.accountHeader}>

            <section className={styles.headerLeft}>
                <div className={styles.headerContainerImg}>
                    <img src="#" alt="img-user" />
                </div>
            </section>

            <section className={styles.headerRight}>
                <h1>Nombre de usuario</h1>
                <div className={styles.userFollowers}>
                    <p><span>100</span> seguidores</p>
                    <p><span>5</span> seguidos</p>
                </div>
                <button
                className={styles.followButton}
                onClick={handleClick}
                >Editar perfil
                </button>
            </section>

    </header>
  )
}
