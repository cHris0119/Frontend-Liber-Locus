import { createSlice } from '@reduxjs/toolkit'
export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    bookList: [{
      id: '',
      name: '',
      price: '',
      description: '',
      author: '',
      bookImmg: '',
      seller_id: '',
      bookState: '',
      valoration: '',
      bookCategory: ''
    }]
  },
  reducers: {
    increment: (state, action) => {
      state.counter += 1
    }
  }
})
export const { increment } = bookSlice.actions
