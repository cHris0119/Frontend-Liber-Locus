import { NavLink } from 'react-router-dom'
import { formatearPeso, getDifferenceDate } from '../../../helpers'

import styles from './AuctionCard.module.css'

export const AuctionCard = ({ auctions }) => {
  return (
    <>
      {auctions?.map((auction) => {
        const timeRemaining = getDifferenceDate(auction.created_at, auction.duration_days)
        return (
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

                  {timeRemaining.days > 0 && (
                    <p>{`Finaliza en: ${timeRemaining.days} ${timeRemaining.days === 1 ? 'dia' : 'dias'}`}</p>
                  )}
                  {!timeRemaining.days && timeRemaining.hours > 0 && (
                    <p>{`Finaliza en: ${timeRemaining.hours} ${timeRemaining.hours === 1 ? 'hora' : 'horas'}`}</p>
                  )}
                  {!timeRemaining.days && !timeRemaining.hours && timeRemaining.minutes > 0 && (
                    <p>{`Finaliza en ${timeRemaining.minutes} ${timeRemaining.minutes === 1 ? 'minuto' : 'minutos'}`}</p>
                  )}

                </div>
              </div>

            </div>

          </article>
        </NavLink>
        )
      })}
    </>
  )
}
