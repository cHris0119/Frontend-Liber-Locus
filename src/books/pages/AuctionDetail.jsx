import { Link, useParams } from 'react-router-dom'
import { BackButton, FormAuction, Loader } from '../components'

import styles from '../styles/AuctionDetail.module.css'
import { useAuctionStore } from '../../hooks'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { formatearPeso } from '../../helpers'

export const AuctionDetail = () => {
  const { user } = useSelector(state => state.auth)
  const { id } = useParams()
  const { startLoadingAuction } = useAuctionStore()
  const { isLoadingAuction, auctionList } = useSelector(state => state.auction)
  const [socketAuction, setSocketAuction] = useState(null)
  const [finalPrice, setFinalPrice] = useState(null)

  const auctionD = auctionList.find(auction => auction.id === Number(id))

  const myAuction = auctionD?.book.seller.id === user.id

  useEffect(() => {
    const socket = new WebSocket(`ws://localhost:8000/ws/auction/${id}/`)

    socket.onopen = (msg) => {
      console.log(msg)
      console.log('ws conectado')
    }
    socket.onclose = () => {
      console.log('ws desconectado')
    }
    socket.onmessage = (msg) => {
      try {
        const dataServer = JSON.parse(msg.data)
        console.log(dataServer)
        if (!dataServer.error) {
          setFinalPrice(dataServer.message)
        }
      } catch (error) {
        console.error('Error al procesar la puja WebSocket:', error)
      }
    }

    setSocketAuction(socket)
  }, [])

  const handlePuja = (newPuja) => {
    if (socketAuction && socketAuction.readyState === WebSocket.OPEN) {
      const puja = {
        type: 'Pujar',
        subasta_id: id,
        user_email: user.id,
        amount: parseInt(newPuja)
      }
      console.log(puja)
      socketAuction.send(JSON.stringify(puja))
    } else {
      console.error('WebSocket connection not open.')
    }
  }
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
    <div className={`${styles.container} animate__animated animate__fadeIn animate__faster`}>
    <BackButton />
  <div className={styles.productDetailContainer}>
    <div className={styles.productImgContainer}>
      <img
      className={styles.productImg}
      src={auctionD.book_img ? `data:image/${auctionD.format};base64,${auctionD.book_img}` : '/public/not-found.jpg'}
      alt={auctionD.book.name} />
    </div>

    {/* Este div tiene que ser un componente. */}
    <div className={styles.productInfo}>
      <ul className={styles.productInfoNames}>
        <li className={styles.productCategory}>Finaliza en 3d</li>
        <li className={styles.productName}>{auctionD.book.name}</li>
        <li className={styles.productPrice}>Puja actual: { auctionD.final_price
          ? formatearPeso(parseInt(auctionD.final_price))
          : formatearPeso(parseInt(finalPrice)) } CLP</li>

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

</div>
  )
}
