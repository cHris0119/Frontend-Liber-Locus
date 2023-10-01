import { Filters, Searcher } from '../'
import { NavLink } from 'react-router-dom'

import styles from './MarketplaceHeader.module.css'

export const MarketplaceHeader = ({
  filteredBook,
  setFilteredBook,
  handleSearch,
  handleCategory,
  search,
  category
}) => {
  return (
    <div className={styles.marketHeader}>

      <Searcher
      handleSearch = {handleSearch}
      search = {search}
       />

      <Filters
      filteredBook={filteredBook}
      setFilteredBook={setFilteredBook}
      handleCategory = {handleCategory}
      category={category}
       />
      <NavLink className={styles.publishBook} to={'/publicarLibro'}>
        <button className={styles.publishBookButton}>Publicar</button>
      </NavLink>
    </div>
  )
}
