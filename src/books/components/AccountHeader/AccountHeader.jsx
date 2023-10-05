import { useNavigate } from 'react-router-dom'

import styles from './AccountHeader.module.css'
import { useSelector } from 'react-redux'

export const AccountHeader = () => {
  const { user } = useSelector(state => state.auth)

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/editarPerfil')
  }

  return (
    <header className={styles.accountHeader}>

            <section className={styles.headerLeft}>
                <div className={styles.headerContainerImg}>
                    <img
                    src={`http://127.0.0.1:8000/LB_API/staticfiles${user.userPhoto}`} alt="img-user" />
                </div>
            </section>

            <section className={styles.headerRight}>
                <h1>{ `${user.firstName} ${user.lastName}` }</h1>
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
