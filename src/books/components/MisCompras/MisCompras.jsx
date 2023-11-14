import { Link } from 'react-router-dom'
import styles from './MisCompras.module.css'

export const MisCompras = () => {
  return (
    <>
    <h1>Mis compras</h1>
    <div className={styles.cardList}>

            <article className={styles.card}>
                <div className={styles.imgContainer}>
                    <img src="" alt="productImg" />
                </div>

                <div className={styles.details}>
                    <p>Nombre: NameProducto</p>
                    <p>Precio: 5000 CLP</p>
                    <p>Vendedor: Juan Lopez</p>
                    <p>Estado: en revision</p>
                </div>

                <div className={styles.actionsContainer}>
                    <button>
                        <Link to={`/contactar/${123}`}>
                            Contactar al vendedor
                        </Link>
                    </button>
                    <button>Cancelar compra</button>
                </div>
            </article>

        </div>
    </>
  )
}
