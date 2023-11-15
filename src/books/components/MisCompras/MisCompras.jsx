import { useEffect, useState } from 'react'
import booksApi from '../../../api/booksApi'

import styles from './MisCompras.module.css'
import { Loader } from '../Loader/Loader'
import { ComprasCard } from '../ComprasCard/ComprasCard'

export const MisCompras = () => {
  const [misCompras, setMisCompras] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }
  useEffect(() => {
    const getMisCompras = async () => {
      try {
        const response = await booksApi.get('api/mis_compras/',
          config)

        setIsLoading(false)
        const { data } = response
        setMisCompras(data.compras)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
    getMisCompras()
  }, [])

  const hasCompras = misCompras.length > 0

  return (
    <>
    <h1>Mis compras</h1>
    <div className={styles.cardList}>
    { isLoading
      ? <Loader />
      : (hasCompras
          ? (
              misCompras?.map((compra) => (
              <ComprasCard
              key={compra.id}
              compra={compra}
              />
              ))
            )
          : <h3>No se encuentran compras</h3>
        ) }

    </div>
    </>
  )
}
