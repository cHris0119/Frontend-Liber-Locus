import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { TableContador, NavBarContador, Loader } from '../components'
import { useSalesStore } from '../../hooks'
import { formatearPeso } from '../../helpers'
import '../index.css'

export const ContadorPage = () => {
  const { isLoadingSales, salesList } = useSelector(state => state.sales)
  const { startLoadingSales } = useSalesStore()

  // const hasSales = salesList.length > 0

  const mappedSales = salesList?.map(sale => {
    return {
      id: sale.id,
      vendedor: `${sale.book.seller.first_name} ${sale.book.seller.last_name}`,
      libro: sale.book.name,
      precio: formatearPeso(parseInt(sale.book?.price)),
      estado: sale.purchase_detail_state.state,
      comprador: `${sale.buyer.first_name} ${sale.buyer.last_name}`
    }
  })

  console.log(mappedSales)

  useEffect(() => {
    startLoadingSales()
  }, [])

  if (isLoadingSales === true) {
    return (
      <div style={{ height: '100vh' }}>
      <Loader />
      </div>
    )
  }
  return (
    <div>
      <NavBarContador />

    <div className='w-8/12 mx-auto flex justify-center items-center h-screen' >
      <TableContador data = {mappedSales} />
    </div>
    </div>
  )
}
