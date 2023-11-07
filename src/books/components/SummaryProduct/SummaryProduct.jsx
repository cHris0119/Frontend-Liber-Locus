import { useSelector } from 'react-redux'
import styles from './SummaryProduct.module.css'
import { formatearPeso } from '../../../helpers'

export const SummaryProduct = ({ bookId }) => {
  const { bookList } = useSelector(state => state.book)

  const selectedBook = bookList.find(book => book.id === Number(bookId))

  const sellerName = `${selectedBook.seller.first_name} ${selectedBook.seller.last_name}`
  const formatPrice = formatearPeso(parseInt(selectedBook.price))

  return (
    <ul className={styles.summaryProductContainer}>

      <h3>Resumen de compra</h3>

      <div className={styles.summaryProductDetail}>
        <li>{selectedBook.name}</li>
        <li>{formatPrice} CLP</li>
      </div>

      <div className={styles.summaryProductSeller}>
        <li>Vendedor: {sellerName}</li>
      </div>

    </ul>
  )
}
