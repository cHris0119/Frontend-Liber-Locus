import { NavLink } from 'react-router-dom'
import styles from './ProductCard.module.css'

export const ProductCard = ({ books }) => {
  return (
    <>
      {books?.map((book) => (
        <NavLink to={`/detallePost/${book.id}`} key={book.id} className={styles.customNavlink}>
          <article className={styles.lastPostCard}>

            <div className={styles.cardInfo}>

              <div className={styles.cardImgContainer}>
                <img
                className={styles.cardImg}
                src={book.book_img ? `data:image/${book.format};base64,${book.book_img}` : '/public/not-found.jpg'}
                alt={book.name} />
              </div>

              <div className={styles.cardDetails}>
                <div>
                  <h3>{book.name}</h3>
                </div>

                <div className={styles.cardDescription}>
                  <p>{parseInt(book.price)} CLP</p>
                  <span>{book.book_category.description}</span>
                </div>
              </div>

            </div>

          </article>
        </NavLink>
      ))}
    </>
  )
}
