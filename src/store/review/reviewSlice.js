import { createSlice } from '@reduxjs/toolkit'

export const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    isLoadingReview: true,
    reviewList: [],
    message: undefined
  },
  reducers: {
    onLoadReview: (state, { payload = [] }) => {
      state.isLoadingReview = false
      //
      payload.forEach(review => {
        const exist = state.reviewList.some(dbReview => dbReview.id === review.id)
        if (!exist) {
          state.reviewList.push(review)
        }
      })
    }
  }
})
export const { onLoadReview } = reviewSlice.actions
