import { Link } from 'react-router-dom'
import { formatearPeso } from '../../../helpers'

import styles from './VentasCard.module.css'

export const VentasCard = ({ venta }) => {
  const nameSeller = `${venta.vendedor.first_name} ${venta.vendedor.last_name}`
  const newPrecio = formatearPeso(parseInt(venta.precio_del_libro))

  return (
    <>
            <article className={styles.card}>
                <div className={styles.imgContainer}>
                    <img
                    src={venta.book_img ? `data:image/${venta.format};base64,${venta.book_img}` : '/public/not-found.jpg'} alt={venta.nombre_libro} />
                </div>

                <div className={styles.details}>
                    <p>Nombre: {venta.nombre_libro}</p>
                    <p>Precio: {newPrecio} CLP</p>
                    <p>Vendedor: {nameSeller}</p>
                    <p>Estado: {venta.estado_libro}</p>
                </div>

                <div className={styles.actionsContainer}>
                    <button>
                        <Link to={`/contactar/${venta.id_chat}`}>
                            Contactar al vendedor
                        </Link>
                    </button>
                    <button>Cancelar venta</button>
                </div>
            </article>
    </>
  )
}
