import { Link } from 'react-router-dom'
import styles from './ComprasCard.module.css'
import { formatearPeso } from '../../../helpers'

export const ComprasCard = ({ compra }) => {
  const nameSeller = `${compra.vendedor.first_name} ${compra.vendedor.last_name}`
  const newPrecio = formatearPeso(parseInt(compra.precio_del_libro))

  return (
    <>
            <article className={styles.card}>
                <div className={styles.imgContainer}>
                    <img
                    src={compra.book_img ? `data:image/${compra.format};base64,${compra.book_img}` : '/public/not-found.jpg'} alt={compra.nombre_libro} />
                </div>

                <div className={styles.details}>
                    <p>Nombre: {compra.nombre_libro}</p>
                    <p>Precio: {newPrecio} CLP</p>
                    <p>Vendedor: {nameSeller}</p>
                    <p>Estado: {compra.estado_libro}</p>
                </div>

                <div className={styles.actionsContainer}>
                    <button>
                        <Link to={`/contactar/${compra.id_chat}`}>
                            Contactar al vendedor
                        </Link>
                    </button>
                    <button>Cancelar compra</button>
                </div>
            </article>
    </>
  )
}
