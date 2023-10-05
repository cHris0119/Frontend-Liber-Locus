import { createSlice } from '@reduxjs/toolkit'

export const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    isLoadingReview: true,
    reviewList: [],
    message: undefined
  },
  reducers: {
    //* AGREGAR
    onAddReview: (state, { payload = [] }) => {
      state.reviewList.push(payload)
      state.message = undefined
    },
    //* ELIMINAR
    onDeleteReview: (state, { payload }) => {
      state.reviewList = state.reviewList.filter(review => review.id !== payload)
    },
    //* EDITAR
    onUpdateReview: (state, { payload }) => {
      state.reviewList = state.reviewList.map(review => {
        if (review.id === parseInt(payload.id)) {
          return payload
        }
        return review
      })
    },
    //* CARGAR REVIEWS DE BD
    onLoadReview: (state, { payload = [] }) => {
      state.isLoadingReview = false
      //
      payload.forEach(review => {
        const exist = state.reviewList.some(dbReview => dbReview.id === review.id)
        if (!exist) {
          state.reviewList.push(review)
        }
      })
    },
    //* LIMPIAR MENSAJE DE ERROR
    clearMessage: (state) => {
      state.message = undefined
    }
  }
})
export const {
  onLoadReview,
  onAddReview,
  onDeleteReview,
  onUpdateReview
} = reviewSlice.actions
