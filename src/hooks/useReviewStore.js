import { useDispatch, useSelector } from 'react-redux'
import booksApi from '../api/booksApi'
import { onAddReview, onDeleteReview, onLoadReview, onUpdateReview } from '../store/review/reviewSlice'
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
      dispatch(onAddReview(response.data.reviewData))
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
  //* EDITAR REVIEW
  const startUpdateReview = async (review) => {
    const { description, id, image, title, valoration } = review
    try {
      console.log(review)

      const response = await booksApi.put(`api/reviews/update/${parseInt(id)}/`, {

        title,
        description,
        review_img: image,
        valoration: parseInt(valoration)

      }, config)

      dispatch(onUpdateReview(response.data))

      Swal.fire({
        icon: 'success',
        title: 'Reseña editada con exito.',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(response)
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
      dispatch(onLoadReview(data))
    } catch (error) {
      console.log('Error cargando reseñas')
      Swal.fire({
        icon: 'error',
        title: 'Error al cargar reseñas.',
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
    startUpdateReview,
    startDeletingReview
  }
}
