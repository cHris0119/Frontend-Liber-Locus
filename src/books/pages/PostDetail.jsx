import { useSelector } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom'
import 'animate.css'
import { useBookStore } from '../../hooks'
import { useEffect } from 'react'
import { BackButton, Loader, QuestionsPost } from '../components/'

import styles from '../styles/PostDetail.module.css'

export const PostDetail = () => {
  const { bookList } = useSelector(state => state.book)
  const { postId } = useParams()
  const { startLoadingEvents } = useBookStore()
  const { isLoadingBooks } = useSelector(state => state.book)

  const selectedBook = bookList.find(book => book.id === Number(postId))

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
    <div className={`${styles.container} animate__animated animate__fadeIn animate__faster`}>
        <BackButton />
      <div className={styles.productDetailContainer}>
        <div className={styles.productImgContainer}>
          <img className={styles.productImg} src="https://prodimage.images-bn.com/pimages/9781435159570_p0_v1_s1200x630.jpg" alt={selectedBook.name} />
        </div>

        {/* Este div tiene que ser un componente. */}
        <div className={styles.productInfo}>
          <ul className={styles.productInfoNames}>
            <li className={styles.productCategory}>{selectedBook.book_category.description}</li>
            <li className={styles.productName}>{selectedBook.name}</li>
            <li className={styles.productPrice}>{parseInt(selectedBook.price)} CLP</li>
            <li className={styles.productSeller}>Vendedor: {selectedBook.seller.first_name} {selectedBook.seller.last_name}</li>
            <li className={styles.productDescription}><p>{selectedBook.description}</p></li>
          </ul>
          <div className={styles.buyButtonContainer}>
            <NavLink className={styles.linkBuyButton} to={`/detalleEnvio/${postId}`}><button className={styles.buyButton} >Comprar</button></NavLink>
          </div>
        </div>
      </div>

      <QuestionsPost />
    </div>
  )
}
