import { useDispatch, useSelector } from 'react-redux'
import booksApi from '../api/booksApi'
import { onLoadReview } from '../store/review/reviewSlice'

export const useReviewStore = () => {
  const { reviewList } = useSelector(state => state.review)
  const dispatch = useDispatch()
  //
  //* CARGAR REVIEWS
  const startLoadingReviews = async () => {
    try {
      const { data } = await booksApi.get('api/getReviews')
      console.log('dataR', data)
      dispatch(onLoadReview(data))
    } catch (error) {
      console.log('Error cargando reseñas')
      console.log(error)
    }
  }

  return {
    //* Propiedades
    reviewList,
    //* Metodos
    startLoadingReviews
  }
}
