import { useEffect } from 'react'
import { Loader, ProductCard } from '../'
import { useBookStore } from '../../../hooks'
import { useSelector } from 'react-redux'

import styles from './PostList.module.css'

export const PostList = () => {
  const { bookList } = useSelector(state => state.book)
  const { startLoadingEvents } = useBookStore()
  const { isLoadingBooks } = useSelector(state => state.book)
  const hasPost = bookList.length > 0
  //

  useEffect(() => {
    startLoadingEvents()
  }, [])

  if (isLoadingBooks === true) {
    return (
      <div style={{ height: '100vh' }}>
      <Loader />
      </div>
    )
  }

  return (
    <>
      {hasPost
        ? (<div className={styles.postListContainer}>
          <ProductCard books={bookList} />
        </div>)
        : (<div className={styles.NoFoundContainer}>
          {/* (<Loader />) */}
          <h2 className={styles.noFound}>No se encuentran libros...</h2>
        </div>)

      }
    </>
  )
}
