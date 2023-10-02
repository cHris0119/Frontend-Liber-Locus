import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { HomeSection, ProductCard } from '../'
import { useBookStore } from '../../../hooks'

import styles from './LastPosts.module.css'

export const LastPosts = () => {
  const { bookList } = useSelector(state => state.book)
  const { startLoadingEvents } = useBookStore()
  const lastPost = bookList.slice(0, 4)

  useEffect(() => {
    startLoadingEvents()
  }, [])

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
