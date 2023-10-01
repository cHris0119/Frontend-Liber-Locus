import { useDispatch, useSelector } from 'react-redux'
import booksApi from '../api/booksApi'
import { errorToAdd, onAddBook, clearMessage, onLoadBook, onDeleteBook, onUpdateBook } from '../store/books/bookSlice'
import Swal from 'sweetalert2'

export const useBookStore = () => {
  const { bookList } = useSelector(state => state.book)
  const dispatch = useDispatch()
  const token = JSON.parse(localStorage.getItem('token'))

  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }

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
      },
      config)

      const { BookData } = response.data

      dispatch(onAddBook(BookData))
      Swal.fire({
        icon: 'success',
        title: 'Libro agregado con exito.',
        showConfirmButton: false,
        timer: 1500
      })

      console.log(response)
    } catch (error) {
      const { data } = error.response
      dispatch(errorToAdd(data.error))
      setTimeout(() => {
        dispatch(clearMessage())
      }, 10)
    }
  }
  //* EDITAR LIBRO POR ID

  const startUpdateBook = async (book) => {
    const { id, name, price, description, author, book_img: bookImg, book_category: bookCategory } = book
    try {
      //
      const response = await booksApi.put(`api/books/update/${id}/`, {
        name,
        price,
        description,
        author,
        book_img: bookImg,
        book_category: bookCategory
      }, config)
      dispatch(onUpdateBook(book))

      Swal.fire({
        icon: 'success',
        title: 'Libro editado con exito.',
        showConfirmButton: false,
        timer: 1500
      })

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  //* ELIMINAR LIBRO POR ID

  const startDeletingBook = async (id) => {
    try {
      const response = await booksApi.delete(`api/books/delete/${id}/`, config)
      dispatch(onDeleteBook(id))
      Swal.fire({
        icon: 'success',
        title: 'Libro eliminado con exito.',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  //* CARGAR LIBROS
  const startLoadingEvents = async () => {
    try {
      const { data } = await booksApi.get('api/books/get_all_books/', config)
      console.log(data)

      dispatch(onLoadBook(data))
    } catch (error) {
      console.log('Error cargando libros')
      Swal.fire({
        icon: 'error',
        title: 'Error al eliminar.',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(error)
    }
  }

  return {
    //* Propiedades
    bookList,
    //* Metodos
    startAddBook,
    startLoadingEvents,
    startDeletingBook,
    startUpdateBook
  }
}
