import { useSelector } from 'react-redux'

import { useAuctionStore } from '../../../hooks'
import { Loader } from '../Loader/Loader'
import { useEffect } from 'react'

import styles from './MyAuction.module.css'

export const MyAuction = () => {
  const { user } = useSelector(state => state.auth)
  const { auctionList, isLoadingAuction } = useSelector(state => state.auction)
  const { startLoadingAuction } = useAuctionStore()

  //* Subastas que no esten canceladas o finalizadas.
  const availableAuction = auctionList.filter((auction) => auction.auction_state.id === 2)
  console.log('asdasdasd', availableAuction)

  const myAuction = availableAuction.filter(auction => auction.book.seller.id === user.id)
  console.log('aaa', myAuction)

  const hasAuction = myAuction.length > 0

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
    <>
    {hasAuction
      ? (myAuction.map((auction) => {
          return (
        <article
        key={auction.id}
        className={styles.myPost}>

          <div className={styles.articleImgContainer}>
            <img
             src={auction.book_img ? `data:image/${auction.format};base64,${auction.book_img}` : '/public/not-found.jpg'}
            alt={auction.book.name} />
          </div>

          <div className={styles.articleContent}>
            <div className={styles.articleDetails}>
                <p>{auction.book.name}</p>
                <p>5000 CLP</p>
                <p>Publicado hace: 2d</p>
            </div>
            <div className={styles.articleActions}>
              <button>Eliminar</button>
              <button>Finalizar subasta</button>
            </div>
          </div>

        </article>
          )
        }))
      : <h2 className={styles.noFound}>No tienes subastas activas</h2>}

    </>
  )
}
