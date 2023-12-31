import { NavLink, Outlet } from 'react-router-dom'
import styles from '../styles/MyShopping.module.css'

export const MyShopping = () => {
  return (
    <div className={styles.container}>

        <div className={styles.misVentasContainer}>

            <NavLink
            to={'misCompras'}
            >Mis compras
            </NavLink>

            <NavLink
            to={'misVentas'}
            >Mis ventas
            </NavLink>

        </div>

        <Outlet />

    </div>
  )
}
