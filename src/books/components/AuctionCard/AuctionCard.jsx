import { NavLink } from 'react-router-dom'
import styles from './AuctionCard.module.css'
import { formatearPeso } from '../../../helpers'

export const AuctionCard = ({ auctions }) => {
  return (
    <>
      {auctions?.map((auction) => (
        <NavLink
        key={auction.id}
        to={`/detalleSubasta/${auction.id}`} className={styles.customNavlink}>
          <article className={styles.lastPostCard}>

            <div className={styles.cardInfo}>

              <div className={styles.cardImgContainer}>
                <img
                className={styles.cardImg}
                src={auction.book_img ? `data:image/${auction.format};base64,${auction.book_img}` : '/public/not-found.jpg'}
                alt={auction.book.name} />
              </div>

              <div className={styles.cardDetails}>
                <div>
                  <h3>{auction.book.name}</h3>
                </div>

                <div className={styles.cardDescription}>
                  <p>Puja actual: { auction.final_price
                    ? formatearPeso(parseInt(auction.final_price))
                    : formatearPeso(parseInt(auction.initial_price)) } CLP</p>
                  <p>{ auction.created_at }</p>
                </div>
              </div>

            </div>

          </article>
        </NavLink>
      ))}
    </>
  )
}
