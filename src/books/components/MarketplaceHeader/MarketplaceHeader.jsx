import { Filters, Searcher } from '../'
import { NavLink } from 'react-router-dom'

import styles from './MarketplaceHeader.module.css'

export const MarketplaceHeader = () => {
  return (
    <div className={styles.marketHeader}>
      <Searcher />
      <Filters />
      <NavLink className={styles.publishBook} to={'/publicarLibro'}>
        <button className={styles.publishBookButton}>Publicar</button>
      </NavLink>
    </div>
  )
}
