import { Link } from 'react-router-dom'
import { formatearPeso } from '../../../helpers'

import styles from './VentasCard.module.css'

export const VentasCard = ({ venta }) => {
  const nameSeller = `${venta.buyer.first_name} ${venta.buyer.last_name}`
  const newPrecio = formatearPeso(parseInt(venta.book.price))

  return (
    <>
            <article className={styles.card}>
                <div className={styles.imgContainer}>
                    <img
                    src={venta.book.book_img ? `data:image/${venta.book.format};base64,${venta.book.book_img}` : '/public/not-found.jpg'} alt={venta.book.name} />
                </div>

                <div className={styles.details}>
                    <p>Nombre: {venta.book.name}</p>
                    <p>Precio: {newPrecio} CLP</p>
                    <p>Comprador: {nameSeller}</p>
                    <p>Estado: {venta.book.state}</p>
                </div>

                <div className={styles.actionsContainer}>
                    <button>
                        <Link to={`/contactar/${venta.chat_room}`}>
                            Contactar al comprador
                        </Link>
                    </button>
                    {/* <button>Cancelar venta</button> */}
                </div>
            </article>
    </>
  )
}
