import { ProductCard } from '../'

import styles from './PostList.module.css'

export const PostList = ({ bookList }) => {
  const hasPost = bookList.length > 0
  //

  return (
    <>
      {hasPost
        ? (<div className={styles.postListContainer}>
          <ProductCard books={bookList} />
        </div>)

        : (<div className={styles.NoFoundContainer}>
          {/* (<Loader />) */}
          <h2 className={styles.noFound}>No se encuentran libros.</h2>
        </div>)

      }
    </>
  )
}
