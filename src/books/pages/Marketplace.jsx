import 'animate.css'

import { Loader, MarketplaceMain } from '../components'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useBookStore } from '../../hooks'

export const Marketplace = () => {
  const { bookList, isLoadingBooks } = useSelector(state => state.book)
  const { startLoadingEvents } = useBookStore()

  const availableBooks = bookList.filter(book => book.book_state.id === 2)

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

      <h1 style={{ color: '#fff', textAlign: 'center', borderBottom: '2px solid #fff', paddingBottom: '20px', display: 'inline-block', fontSize: '2rem' }}>MARKETPLACE</h1>

      <MarketplaceMain bookList={availableBooks} />

    </div>

  )
}
