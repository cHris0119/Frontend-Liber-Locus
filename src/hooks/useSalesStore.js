import { useDispatch } from 'react-redux'
import booksApi from '../api/booksApi'
import Swal from 'sweetalert2'
import { onLoadSales } from '../store/sales/salesSlice'

export const useSalesStore = () => {
  const dispatch = useDispatch()
  const token = JSON.parse(localStorage.getItem('token'))

  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }
  //* CARGAR LIBROS
  const startLoadingSales = async () => {
    try {
      const response = await booksApi.get('api/counter/get_all_sales', config)
      console.log(response)

      dispatch(onLoadSales(response.data.purchases))
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al cargar ventas.',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(error)
    }
  }
  return { startLoadingSales }
}
