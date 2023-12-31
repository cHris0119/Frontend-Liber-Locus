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
        console.log(response)

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
    <div className={styles.cardList}>
    { isLoading
      ? <Loader />
      : (hasCompras
          ? (
              misCompras?.map((compra) => (
                compra.book.state === 'FINALIZADO'
                  ? null
                  : <ComprasCard
              key={compra.id}
              compra={compra}
              />
              ))
            )
          : <h3 className='text-xl text-white text-center'>No se encuentran compras</h3>
        ) }

    </div>
    </>
  )
}
