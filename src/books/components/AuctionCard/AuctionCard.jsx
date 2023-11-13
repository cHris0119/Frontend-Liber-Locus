import { NavLink } from 'react-router-dom'
import styles from './AuctionCard.module.css'

export const AuctionCard = ({ auctions }) => {
  return (
    <>
      {auctions?.map((auction, index) => (
        <NavLink
        key={index}
        to={'/detalleSubasta/123'} className={styles.customNavlink}>
          <article className={styles.lastPostCard}>

            <div className={styles.cardInfo}>

              <div className={styles.cardImgContainer}>
                <img
                className={styles.cardImg}
                src='https://images.cdn1.buscalibre.com/fit-in/360x360/53/7b/537b90749923beaafc8f4553a951edb6.jpg'
                alt='aaa' />
              </div>

              <div className={styles.cardDetails}>
                <div>
                  <h3>Harry potter coleccionista</h3>
                </div>

                <div className={styles.cardDescription}>
                  <p>Puja actual: 10.000 CLP</p>
                  <p>Finaliza en 4 dias.</p>
                </div>
              </div>

            </div>

          </article>
        </NavLink>
      ))}
    </>
  )
}
