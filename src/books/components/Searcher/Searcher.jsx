import styles from './Searcher.module.css'

export const Searcher = ({ handleSearch, search }) => {
  return (

    <form className={styles.formSearch}>
      <input
      type="text"
      placeholder='Busca un libro...'
      onChange={handleSearch}
      value={search}
       />
      <input type="submit" value='Buscar' />
    </form>

  )
}
