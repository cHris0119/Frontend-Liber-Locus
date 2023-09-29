import { useDispatch, useSelector } from 'react-redux'
import booksApi from '../api/booksApi'
import { errorToAdd, onAddBook, clearMessage, onLoadBook } from '../store/books/bookSlice'

export const useBookStore = () => {
  const { bookList } = useSelector(state => state.book)
  const dispatch = useDispatch()

  //* AGREGAR LIBRO
  const startAddBook = async (newBook) => {
    const {
      nameBook,
      price,
      description,
      nameAuthor,
      genre,
      uid
    } = newBook

    try {
      const response = await booksApi.post('api/books/create/', {
        name: nameBook,
        price,
        description,
        author: nameAuthor,
        book_img: 'bookIMG',
        seller: uid,
        book_state: 2,
        valoration: 1,
        book_category: genre
      })

      const { BookData } = response.data

      dispatch(onAddBook(BookData))

      console.log(response)
    } catch (error) {
      const { data } = error.response
      dispatch(errorToAdd(data.error))
      setTimeout(() => {
        dispatch(clearMessage())
      }, 10)
    }
  }

  //* CARGAR LIBROS
  const startLoadingEvents = async () => {
    try {
      const { data } = await booksApi.get('api/books/get_all_books/')
      console.log(data)

      dispatch(onLoadBook(data))
    } catch (error) {
      console.log('Error cargando libros')
      console.log(error)
    }
  }

  return {
    //* Propiedades
    bookList,
    //* Metodos
    startAddBook,
    startLoadingEvents
  }
}
