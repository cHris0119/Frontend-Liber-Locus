import 'animate.css'

import { Loader, MarketplaceMain } from '../components'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useBookStore } from '../../hooks'

export const Marketplace = () => {
  const { bookList } = useSelector(state => state.book)
  const { startLoadingEvents } = useBookStore()
  const { isLoadingBooks } = useSelector(state => state.book)

  useEffect(() => {
    startLoadingEvents()
  }, [])

  if (isLoadingBooks === true) {
    return (
      <div style={{ height: '100vh' }}>
      <Loader />
      </div>
    )
  }

  return (

    <div
    className='animate__animated animate__faster'
    style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2vh', paddingBottom: '4.5rem' }}>

      <h1 style={{ color: '#fff', textAlign: 'center', borderBottom: '2px solid #fff', paddingBottom: '20px', display: 'inline-block' }}>MARKETPLACE</h1>

      <MarketplaceMain bookList={bookList} />

    </div>

  )
}
