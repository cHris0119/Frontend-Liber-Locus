import { useEffect } from 'react'
import { ProductCard } from '../'
import { useBookStore } from '../../../hooks'

import styles from './PostList.module.css'

export const PostList = ({ bookList }) => {
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
        : (<div className={styles.NoFoundContainer}>
          {/* (<Loader />) */}
          <h2 className={styles.noFound}>No se encuentran libros...</h2>
        </div>)

      }
    </>
  )
}
