import 'animate.css'

import { MarketplaceHeader, PostList } from '../components'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export const Marketplace = () => {
  const { bookList } = useSelector(state => state.book)
  const [filteredBook, setFilteredBook] = useState(bookList)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')

  const handleSearch = (e) => {
    setSearch(e.target.value)

    if (search === '') return setFilteredBook(bookList)

    const result = bookList.filter(book => {
      return book.name.toLowerCase().includes(search.toLowerCase())
    })

    setFilteredBook(result)
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  useEffect(() => {
    if (category === 'Todos') return setFilteredBook(bookList)

    const result = bookList.filter(book => {
      return book.category.id === parseInt(category)
    })

    setFilteredBook(result)
  }, [category])

  return (

    <div
    className='animate__animated animate__faster'
    style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '5vh', paddingBottom: '4.5rem' }}>

      <h1 style={{ color: '#fff', textAlign: 'center', borderBottom: '2px solid #fff', paddingBottom: '20px', display: 'inline-block' }}>MARKETPLACE</h1>

      <MarketplaceHeader
      filteredBook={filteredBook}
      setFilteredBook={setFilteredBook}
      handleSearch = {handleSearch}
      handleCategory = {handleCategory}
      category={category}
      search = {search}
      />
      <PostList bookList={filteredBook} />
    </div>

  )
}
