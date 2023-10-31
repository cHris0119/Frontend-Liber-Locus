import { NavLink } from 'react-router-dom'

import styles from './SelectDirection.module.css'
import { useSelector } from 'react-redux'

export const SelectDirection = () => {
  const { user } = useSelector(state => state.auth)
  const direction = user.direction
  const nameDirection = `${direction.calle.toUpperCase()}. ${direction.numero}`

  return (

    <div className={styles.selectDirectionContainer}>

      <h2>Selecciona tu dirección</h2>

      <div className={styles.directionContainer}>

        <div className={styles.directionMain}>
          <header className={styles.directionHeader}>
            <p>Enviar a domicilio</p>
            <p>$ 3.000 <span>{'>'}</span></p>
          </header>
          <main className={styles.main}>
            <p>{ nameDirection }</p>
          </main>
        </div>

        <footer className={styles.directionFooter}>
          <NavLink className={styles.linkEditDirection}>Editar</NavLink>
        </footer>

      </div>

    </div>

  )
}
