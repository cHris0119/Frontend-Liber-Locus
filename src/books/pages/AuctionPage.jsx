import { AuctionList, MarketSelector } from '../components'
import styles from '../styles/AuctionPage.module.css'

export const AuctionPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SUBASTAS</h1>
      <MarketSelector />

      <AuctionList />
    </div>
  )
}
