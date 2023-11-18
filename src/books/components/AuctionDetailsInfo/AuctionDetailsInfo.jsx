import { Link } from 'react-router-dom'
import { formatearPeso, getDifferenceDate } from '../../../helpers'
import { FormAuction } from '../FormAuction/FormAuction'

import styles from './AuctionDetailsInfo.module.css'

export const AuctionDetailsInfo = ({
  auctionD,
  finalPrice,
  myAuction,
  handlePuja
}) => {
  const timeRemaining = getDifferenceDate(auctionD.created_at, auctionD.duration_days)
  return (
    <div className={styles.productDetailContainer}>
        <div className={styles.productImgContainer}>

        <img
        className={styles.productImg}
        src={auctionD.book_img ? `data:image/${auctionD.format};base64,${auctionD.book_img}` : '/public/not-found.jpg'}
        alt={auctionD.book.name} />

        </div>

        <div className={styles.productInfo}>

        <ul className={styles.productInfoNames}>
            <li className={styles.productCategory}>
            <p>
                  {timeRemaining.days > 0 && (
                    <p>{`Finaliza en: ${timeRemaining.days} ${timeRemaining.days === 1 ? 'dia' : 'dias'}`}</p>
                  )}
                  {!timeRemaining.days && timeRemaining.hours > 0 && (
                    <p>{`Finaliza en: ${timeRemaining.hours} ${timeRemaining.hours === 1 ? 'hora' : 'horas'}`}</p>
                  )}
                  {!timeRemaining.days && !timeRemaining.hours && timeRemaining.minutes > 0 && (
                    <p>{`Finaliza en ${timeRemaining.minutes} ${timeRemaining.minutes === 1 ? 'minuto' : 'minutos'}`}</p>
                  )}
                  </p>
            </li>
            <li className={styles.productName}>{auctionD.book.name}</li>
            <li className={styles.productPrice}>Puja actual: { finalPrice
              ? formatearPeso(parseInt(finalPrice))
              : formatearPeso(parseInt(auctionD.initial_price)) } CLP</li>

            <li className={styles.productSeller}>
            Vendedor:
            <Link to=''> {`${auctionD.book.seller.first_name} ${auctionD.book.seller.last_name}`}
            </Link>
            </li>

            <li className={styles.productDescription}>
            <p>
                {auctionD.book.description}
            </p>
            </li>

        </ul>

        <div className={styles.buyButtonContainer}>
            {myAuction
              ? null
              : (<FormAuction
                finalPrice2={finalPrice}
                auctionD={auctionD}
                handlePuja={handlePuja} />)}
        </div>
        </div>
    </div>
  )
}
