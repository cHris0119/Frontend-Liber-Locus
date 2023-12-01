import { Link } from 'react-router-dom'
import { AuctionCard } from '../AuctionCard/AuctionCard'

import { useSelector } from 'react-redux'

import styles from './AuctionList.module.css'

export const AuctionList = ({ auctions }) => {
  const { user } = useSelector(state => state.auth)
  const hasAuction = auctions.length > 0
  return (
    <>
    { user.subscription !== 1
      ? (
      <button className={styles.buttonPublicar}>
        <Link to={'/crearSubasta'}>Publicar subasta</Link>
      </button>
        )
      : null}
    {hasAuction
      ? (
            <div className={styles.container}>
              <div className={styles.listContainer}>
                <AuctionCard auctions={auctions} />
              </div>
            </div>)
      : (
        <div className={styles.NoFoundContainer}>
            <h2>No se encuentran subastas.</h2>
        </div>
        )}
    </>
  )
}
