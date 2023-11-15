import { useEffect, useState } from 'react'

import booksApi from '../../../api/booksApi'
import { VentasCard } from '../VentasCard/VentasCard'
import { Loader } from '../Loader/Loader'

import styles from './MisVentas.module.css'

export const MisVentas = () => {
  const [misVentas, setMisVentas] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }
  useEffect(() => {
    const getMisVentas = async () => {
      try {
        const response = await booksApi.get('api/mis_ventas/',
          config)
        setIsLoading(false)
        const { data } = response
        setMisVentas(data.ventas)
        console.log(response)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
    getMisVentas()
  }, [])

  const hasVentas = misVentas.length > 0
  return (
    <>
    <h1>Mis ventas</h1>
    <div className={styles.cardList}>
    { isLoading
      ? <Loader />
      : (hasVentas
          ? (
              misVentas?.map((venta) => (
              <VentasCard
              key={venta.id}
              venta={venta}
              />
              ))
            )
          : <h3>No se encuentran ventas</h3>
        ) }

    </div>
    </>
  )
}
