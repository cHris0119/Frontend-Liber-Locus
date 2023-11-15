import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { HomeSection, Loader, ProductCard } from '../'
import { useBookStore } from '../../../hooks'

import styles from './LastPosts.module.css'

export const LastPosts = () => {
  const { startLoadingEvents } = useBookStore()
  const { isLoadingBooks } = useSelector(state => state.book)

  const { bookList } = useSelector(state => state.book)
  const availableBooks = bookList?.filter(book => book.book_state.id === 2)

  const lastPost = availableBooks.slice(0, 4)

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
    <HomeSection>
      <div className={styles.flexContainer}>
        <h2>Últimas publicaciones</h2>
        <div className={styles.lastPostContainer}>
          <ProductCard books={lastPost} />
        </div>

      </div>
    </HomeSection>
  )
}
