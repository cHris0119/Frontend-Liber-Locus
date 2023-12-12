import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useAuctionStore } from '../../../hooks'
import { getDifferenceDate } from '../../../helpers'
import { Loader } from '../Loader/Loader'

import styles from './MyAuction.module.css'

export const MyAuction = () => {
  //
  const { user } = useSelector(state => state.auth)
  const { auctionList, isLoadingAuction } = useSelector(state => state.auction)
  const { startLoadingAuction, startDeletingAuction, startFinishAuction } = useAuctionStore()

  //* Subastas que no esten canceladas o finalizadas.
  const availableAuction = auctionList.filter((auction) => auction.auction_state.id === 2)

  const myAuction = availableAuction.filter(auction => auction.book.seller.id === user.id)

  console.log(myAuction)

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

  const handleCancel = (id) => {
    const confirmacion = confirm('Estas seguro que quieres cancelar la subasta? Volverá a estar disponible en el marketplace')
    if (confirmacion) {
      console.log('Eliminado')
      startDeletingAuction(id)
    } else {
      console.log('cancelado')
    }
  }

  const handleFinalizar = (id) => {
    const confirmacion = confirm('Estas seguro que quieres finalizar la subasta?')
    if (confirmacion) {
      startFinishAuction(id)
    } else {
      console.log('cancelado')
    }
  }

  return (
    <>
    {hasAuction
      ? (myAuction.map((auction) => {
          const timeRemaining = getDifferenceDate(auction.created_at, auction.duration_days)

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
                    <p>{auction.final_price ? auction.final_price : auction.initial_price} CLP</p>

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

                <div className={styles.articleActions}>
                  <button
                  onClick={() => handleCancel(auction.id)}
                  >
                    Cancelar subasta
                  </button>
                  <button
                  onClick={() => handleFinalizar(auction.id)}
                  >Finalizar subasta</button>
                </div>

              </div>

            </article>
          )
        }))
      : <h2 className={styles.noFound}>No tienes subastas activas</h2>}

    </>
  )
}
