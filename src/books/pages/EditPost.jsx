import { EditPostForm, Loader } from '../components'
import { useBookStore } from '../../hooks'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import styles from '../styles/EditPost.module.css'

export const EditPost = () => {
  const { bookList } = useSelector(state => state.book)
  const { isLoadingBooks } = useSelector(state => state.book)
  const { startLoadingEvents } = useBookStore()

  useEffect(() => {
    const cargar = async () => {
      await startLoadingEvents()
    }
    cargar()
  }, [])

  if (isLoadingBooks === true) {
    return (
      <div style={{ height: '100vh' }}>
      <Loader />
      </div>
    )
  }

  return (

      <div className={styles.editAccountContainer}>
        <EditPostForm
        bookList={bookList}
        />

      </div>

  )
}
