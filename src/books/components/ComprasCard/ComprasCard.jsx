import { Link } from 'react-router-dom'
import styles from './ComprasCard.module.css'
import { formatearPeso } from '../../../helpers'

export const ComprasCard = ({ compra }) => {
  const nameSeller = `${compra.seller.first_name} ${compra.seller.last_name}`
  const newPrecio = formatearPeso(parseInt(compra.book.price))

  return (
    <>
            <article className={styles.card}>
                <div className={styles.imgContainer}>
                    <img
                    src={compra.book.book_img ? `data:image/${compra.book.format};base64,${compra.book.book_img}` : '/public/not-found.jpg'} alt={compra.book.name} />
                </div>

                <div className={styles.details}>
                    <p>Nombre: {compra.book.name}</p>
                    <p>Precio: {newPrecio} CLP</p>
                    <p>Vendedor: {nameSeller}</p>
                    <p>Estado: {compra.book.state}</p>
                    <p>Codigo: 1234</p>
                </div>

                <div className={styles.actionsContainer}>
                    <button>
                        <Link to={`/contactar/${compra.chat_room}`}>
                            Contactar al vendedor
                        </Link>
                    </button>
                    <button>Cancelar compra</button>
                </div>
            </article>
    </>
  )
}
