import { useState } from 'react'
import { MarketplaceHeader, PostList } from '../'

export const MarketplaceMain = ({ bookList }) => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')
  const [price, setPrice] = useState('seleccione')
  const [filteredBook, setFilteredBook] = useState(bookList)

  const handleSearch = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    setPrice('seleccione')

    const result = bookList.filter(book => {
      return (
        (category === 'Todos' || book.book_category.id === parseInt(category)) &&
        (newSearch === '' || book.name.toLowerCase().includes(newSearch.toLowerCase()))
      )
    })

    setFilteredBook(result)
  }

  const handleCategory = ({ target }) => {
    const newCategory = target.value
    setCategory(newCategory)

    const result = bookList.filter(book => {
      return (
        (newCategory === 'Todos' || book.book_category.id === parseInt(newCategory)) &&
        (search === '' || book.name.toLowerCase().includes(search.toLowerCase()))
      )
    })

    setFilteredBook(result)
  }

  const handlePrice = ({ target }) => {
    const newPrice = target.value
    setPrice(newPrice)

    const clonedFilteredBook = [...filteredBook]

    if (newPrice === 'menor') {
      clonedFilteredBook.sort((a, b) => parseInt(a.price) - parseInt(b.price))
    } else if (newPrice === 'mayor') {
      clonedFilteredBook.sort((a, b) => parseInt(b.price) - parseInt(a.price))
    }

    // Actualiza el estado con la nueva copia del array
    setFilteredBook(clonedFilteredBook)
  }

  return (
    <>
     <MarketplaceHeader
      search = {search}

      category={category}
      price={price}

      handlePrice = {handlePrice}
      handleSearch = {handleSearch}
      handleCategory = {handleCategory}
      />
      <PostList bookList={filteredBook} />
    </>
  )
}
