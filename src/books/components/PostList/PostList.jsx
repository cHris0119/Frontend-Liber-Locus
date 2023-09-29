import { useEffect } from 'react'
import { ProductCard } from '../'
import { useBookStore } from '../../../hooks'

import styles from './PostList.module.css'
import { useSelector } from 'react-redux'

export const PostList = () => {
  const { bookList } = useSelector(state => state.book)
  const { startLoadingEvents } = useBookStore()
  const hasPost = bookList.length > 0
  //
  useEffect(() => {
    startLoadingEvents()
  }, [])
  return (
    <>
      {hasPost
        ? (<div className={styles.postListContainer}>
          <ProductCard books={bookList} />
        </div>)
        : (<h2>Cargando...</h2>)

      }
    </>
  )
}
