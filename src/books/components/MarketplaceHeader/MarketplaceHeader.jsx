import { Filters, Searcher } from '../'
import { NavLink } from 'react-router-dom'

import styles from './MarketplaceHeader.module.css'

export const MarketplaceHeader = ({

  search,
  category,
  price,

  handlePrice,
  handleSearch,
  handleCategory
}) => {
  return (
    <div className={styles.marketHeader}>

      <Searcher
      handleSearch = {handleSearch}
      search = {search}
       />

      <Filters
      category={category}
      price={price}

      handlePrice = {handlePrice}
      handleCategory = {handleCategory}
       />

      <NavLink className={styles.publishBook} to={'/publicarLibro'}>
        <button className={styles.publishBookButton}>Publicar</button>
      </NavLink>
    </div>
  )
}
