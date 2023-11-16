import { useSelector } from 'react-redux'
import { useParams, NavLink, Link } from 'react-router-dom'
import 'animate.css'
import { useBookStore } from '../../hooks'
import { useEffect } from 'react'
import { BackButton, Loader, QuestionsPost } from '../components/'
import { formatearPeso } from '../../helpers'

import styles from '../styles/PostDetail.module.css'

export const PostDetail = () => {
  const { user } = useSelector(state => state.auth)
  const { postId } = useParams()
  const { startLoadingEvents } = useBookStore()
  const { isLoadingBooks, bookList } = useSelector(state => state.book)

  const selectedBook = bookList.find(book => book.id === Number(postId))
  const formatPrice = formatearPeso(parseInt(selectedBook.price))
  const myBook = selectedBook.seller.id === user.id

  console.log(selectedBook)

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
          <img
          className={styles.productImg}
          src={selectedBook.book_img ? `data:image/${selectedBook.format};base64,${selectedBook.book_img}` : '/public/not-found.jpg'}
          alt={selectedBook.name} />
        </div>

        {/* Este div tiene que ser un componente. */}
        <div className={styles.productInfo}>
          <ul className={styles.productInfoNames}>
            <li className={styles.productCategory}>{selectedBook.book_category.description}</li>
            <li className={styles.productName}>{selectedBook.name}</li>
            <li className={styles.productPrice}>{formatPrice} CLP</li>

            <li className={styles.productSeller}>
              Vendedor:
              <Link to={`/usuario/${selectedBook.seller.id}`}> {selectedBook.seller.first_name} {selectedBook.seller.last_name}
              </Link>
              </li>

            <li className={styles.productDescription}><p>{selectedBook.description}</p></li>
          </ul>
          {!myBook
            ? (
          <div className={styles.buyButtonContainer}>
            <NavLink className={styles.linkBuyButton} to={`/detalleEnvio/${postId}`}><button className={styles.buyButton} >Comprar</button></NavLink>
          </div>
              )
            : null}
        </div>
      </div>

      <QuestionsPost />
    </div>
  )
}
