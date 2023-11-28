import { useDispatch, useSelector } from 'react-redux'
import { onAddNotification, onLoadNotification } from '../store/notification/notiSlice'
import booksApi from '../api/booksApi'
import Swal from 'sweetalert2'

export const useNotiStore = () => {
  const dispatch = useDispatch()
  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }
  const { user } = useSelector(state => state.auth)

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
      const response = await booksApi.get(`api/notifications/get_user_notifications/${user.id}/`, config)

      dispatch(onLoadNotification(response.data.UserNotificationsData))
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al cargar notificaciones.',
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
