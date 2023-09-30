import { useEffect, useState } from 'react'
import styles from './InputComboBox.module.css'
import booksApi from '../../../api/booksApi'

export const InputComboBox = ({
  label,
  value,
  error,
  errorMsg,
  name,
  onChange
}) => {
  const [category, setCategory] = useState([])
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
        setCategory(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCategory()
  }, [])

  return (
      <div className={styles.genreContainer}>
        <label
        htmlFor={name}
        className={styles.labelgenre}
        >
          {label}
        </label>
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={styles.inputgenre}
        >
            <option value={null}>Seleccione</option>
            { category.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.description}</option>
            )) }

        </select>
        {error && <span className={styles.error}>{errorMsg}</span>}
      </div>
  )
}
