import { useParams } from 'react-router-dom'
import { AuctionDetailsInfo, BackButton, Loader } from '../components'

import { useAuctionStore } from '../../hooks'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import styles from '../styles/AuctionDetail.module.css'

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
    }
    socket.onclose = () => {
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
        user_id: user.id,
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

    <AuctionDetailsInfo
    socketAuction={socketAuction}
    auctionD={auctionD}
    myAuction={myAuction}
    handlePuja={handlePuja}
    finalPrice={finalPrice}
     />

</div>
  )
}
