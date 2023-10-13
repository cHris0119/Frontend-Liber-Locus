import { useEffect, useState } from 'react'
import booksApi from '../../../api/booksApi'

import styles from './InputComboBoxF.module.css'

export const InputComboBoxF = ({
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
        const category = await booksApi.get('api/get_forum_categories/',
          config)
        const data = category.data
        console.log(data)
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
            <option key={genre.id} value={genre.id}>{genre.category_name}</option>
            )) }

        </select>
        {error && <span className={styles.error}>{errorMsg}</span>}
      </div>
  )
}
