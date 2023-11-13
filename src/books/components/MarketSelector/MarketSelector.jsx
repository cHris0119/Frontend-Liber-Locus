import { NavLink } from 'react-router-dom'
import styles from './MarketSelector.module.css'

export const MarketSelector = () => {
  return (
    <div className={styles.container}>
        <NavLink
        className={`${styles.link} ${({ isActive }) => (isActive ? styles.active : '')}`}
        to={'/marketplace'}>MARKETPLACE
        </NavLink>

        <NavLink
        className={`${styles.link}`}
        to={'/subastas'}>SUBASTAS
        </NavLink>
    </div>
  )
}
