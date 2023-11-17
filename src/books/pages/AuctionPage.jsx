import { useEffect } from 'react'
import { useAuctionStore } from '../../hooks'
import { AuctionList, Loader, MarketSelector } from '../components'
import styles from '../styles/AuctionPage.module.css'
import { useSelector } from 'react-redux'

export const AuctionPage = () => {
  const { startLoadingAuction } = useAuctionStore()
  const { auctionList, isLoadingAuction } = useSelector(state => state.auction)

  //* Subastas que no esten canceladas o finalizadas.
  const availableAuction = auctionList.filter((auction) => auction.auction_state.id === 2)

  useEffect(() => {
    startLoadingAuction()
  }, [])

  if (isLoadingAuction === true) {
    return (
      <div style={{ height: '100vh' }}>
      <Loader />
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SUBASTAS</h1>
      <MarketSelector />

      <AuctionList
      auctions={availableAuction}
       />
    </div>
  )
}
