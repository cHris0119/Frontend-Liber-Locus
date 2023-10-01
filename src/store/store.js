import { configureStore } from '@reduxjs/toolkit'
import { authSlice, bookSlice, reviewSlice } from './'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    book: bookSlice.reducer,
    review: reviewSlice.reducer
  }
})
