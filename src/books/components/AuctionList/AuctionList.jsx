import { Link } from 'react-router-dom'
import { AuctionCard } from '../AuctionCard/AuctionCard'

import styles from './AuctionList.module.css'

export const AuctionList = ({ auctions }) => {
  const hasAuction = auctions.length > 0
  return (
    <>
    {hasAuction
      ? (
        <div className={styles.container}>
          <button className={styles.buttonPublicar}>
            <Link to={'/crearSubasta'}>Publicar subasta</Link>
          </button>

          <div className={styles.listContainer}>
            <AuctionCard auctions={auctions} />
          </div>
        </div>
        )
      : (
        <div className={styles.NoFoundContainer}>
            <h2>No se encuentran subastas.</h2>
        </div>
        )}
    </>
  )
}
