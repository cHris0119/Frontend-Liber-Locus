import { configureStore } from '@reduxjs/toolkit'
import { authSlice, bookSlice, reviewSlice, forumSlice, auctionSlice } from './'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    book: bookSlice.reducer,
    review: reviewSlice.reducer,
    forum: forumSlice.reducer,
    auction: auctionSlice.reducer
  }
})
