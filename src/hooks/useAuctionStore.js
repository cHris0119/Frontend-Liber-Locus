import { useDispatch } from 'react-redux'
import booksApi from '../api/booksApi'
import Swal from 'sweetalert2'
import { onDeleteAuction, onLoadAuction } from '../store/auction/auctionSlice'

export const useAuctionStore = () => {
  const dispatch = useDispatch()
  const token = JSON.parse(localStorage.getItem('token'))

  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }

  //* AGREGAR SUBASTA
  const startAddAuction = async (newAuction) => {
    const { bookID, durationDays, initialPrice } = newAuction
    try {
      const response = await booksApi.post(`api/create_subasta/${bookID}/`, {
        initial_price: parseInt(initialPrice),
        duration_days: parseInt(durationDays)
      },
      config)

      console.log(response)

      Swal.fire({
        icon: 'success',
        title: 'Subasta creada con exito.',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      console.log(error)
    }
  }

  //* CANCELAR SUBASTA

  const startDeletingAuction = async (id) => {
    try {
      await booksApi.delete(`api/subastas/${id}/cancel/`, config)

      dispatch(onDeleteAuction(id))

      Swal.fire({
        icon: 'success',
        title: 'Subasta eliminada. Vuelve al marketplace.',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      console.log(error)
    }
  }

  //* CARGAR SUBASTAS
  const startLoadingAuction = async () => {
    try {
      const response = await booksApi.get('api/auction/get_all_auctions/', config)
      const { data } = response

      dispatch(onLoadAuction(data.auctions))

      // dispatch()
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Error al cargar subastas.',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  return {

    //* METODOS
    startAddAuction,
    startDeletingAuction,
    startLoadingAuction
  }
}
