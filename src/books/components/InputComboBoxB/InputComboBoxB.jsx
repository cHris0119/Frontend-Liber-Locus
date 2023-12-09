import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { Loader } from '../Loader/Loader'
import { useBookStore } from '../../../hooks'

import styles from './InputCombo.module.css'

export const InputComboBoxB = ({
  label,
  value,
  error,
  errorMsg,
  name,
  onChange
}) => {
  const { user } = useSelector(state => state.auth)
  const { bookList, isLoadingBooks } = useSelector(state => state.book)
  const { startLoadingEvents } = useBookStore()

  const avaliableBooks = bookList.filter((book) => book.book_state.id === 2)
  const myBooks = avaliableBooks.filter((book) => book.seller.id === user.id)

  useEffect(() => {
    startLoadingEvents()
  }, [])

  if (isLoadingBooks === true) {
    return (
      <div style={{ height: '100%' }}>
      <Loader />
      </div>
    )
  }

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
            { myBooks.map((book) => (
            <option key={book.id} value={book.id}>{book.name}</option>
            )) }

        </select>
        {error && <span className={styles.error}>{errorMsg}</span>}
      </div>
  )
}
