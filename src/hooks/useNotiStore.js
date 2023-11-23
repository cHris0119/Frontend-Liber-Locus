import { useDispatch } from 'react-redux'
import { onAddNotification, onLoadNotification } from '../store/notification/notiSlice'
import booksApi from '../api/booksApi'

export const useNotiStore = () => {
  const dispatch = useDispatch()
  const token = JSON.parse(localStorage.getItem('token'))

  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }

  //* AGREGAR NOTIFICACION
  const startAddNoti = async (newNoti) => {
    // const {
    // } = newNoti

    try {
      const response = await booksApi.post('api/books/create/', {
      },
      config)

      console.log(response.data)

      const { book_img: bookIMG, ...rest } = response.data.BookData
      const newData = { ...rest, format: response.data.format, book_img: response.data.img }

      dispatch(onAddNotification())

      console.log(response)
    } catch (error) {
      const { data } = error.response
      setTimeout(() => {
      }, 10)
    }
  }

  //* CARGAR NOTIFICACIONES

  const startLoadingNoti = async () => {
    try {
      const response = await booksApi.get('api/books/get_all_books/', config)

      dispatch(onLoadNotification(response.data))
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al cargar libros.',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(error)
    }
  }
  return {
    startAddNoti, startLoadingNoti
  }
}
