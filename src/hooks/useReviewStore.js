import { useDispatch, useSelector } from 'react-redux'
import booksApi from '../api/booksApi'
import { onAddReview, onDeleteReview, onLoadReview } from '../store/review/reviewSlice'
import Swal from 'sweetalert2'

export const useReviewStore = () => {
  const { reviewList } = useSelector(state => state.review)
  const dispatch = useDispatch()

  const token = JSON.parse(localStorage.getItem('token'))
  const config = {
    headers: {
      Authorization: `Token ${token}`
    }
  }
  //
  //* AGREGAR REVIEW
  const startAddReview = async (review) => {
    const {
      description, title, valoration, img
    } = review

    try {
      const response = await booksApi.post('api/reviews/create/', {
        description,
        title,
        valoration,
        review_img: img
      },
      config)

      console.log(response)
      dispatch(onAddReview(response.data))
      Swal.fire({
        icon: 'success',
        title: 'Reseña agregada con exito.',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      console.log(error)
    }
  }
  //* ELIMINAR REVIEW POR ID
  const startDeletingReview = async (id) => {
    try {
      const response = await booksApi.delete(`api/reviews/delete/${id}/`, config)

      dispatch(onDeleteReview(id))

      Swal.fire({
        icon: 'success',
        title: 'Reseña eliminada con exito.',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  //* CARGAR REVIEWS
  const startLoadingReviews = async () => {
    try {
      const { data } = await booksApi.get('api/getReviews', config)
      console.log('dataR', data)
      dispatch(onLoadReview(data))
    } catch (error) {
      console.log('Error cargando reseñas')
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
    //* Propiedades
    reviewList,
    //* Metodos
    startLoadingReviews,
    startAddReview,
    startDeletingReview
  }
}
