import { useEffect, useState } from 'react'
import styles from './Filters.module.css'
import booksApi from '../../../api/booksApi'

export const Filters = ({
  handleCategory,
  category
}) => {
  const [genero, setGenero] = useState([])
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }

  useEffect(() => {
    const getCategory = async () => {
      try {
        const category = await booksApi.get('api/getCategories/',
          config)
        const data = category.data
        setGenero(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCategory()
  }, [])
  return (

    <div className={styles.filtersContainer}>

      <select className={styles.filter}>
        <option value="Menor a mayor">Menor a mayor</option>
        <option value="Mayor a menor">Mayor a menor</option>
      </select>

      <select
      onChange={handleCategory}
      value={category}
      className={styles.filter}>

        <option value='Todos'>Todos</option>
        { genero.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.description}</option>
        )) }

      </select>

    </div>

  )
}
