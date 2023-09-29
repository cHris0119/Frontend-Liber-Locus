import { createSlice } from '@reduxjs/toolkit'
export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    isLoadingEvents: true,
    bookList: [],
    message: undefined
  },
  reducers: {
    onAddBook: (state, { payload }) => {
      state.bookList.push(payload)
      state.message = undefined
    },
    errorToAdd: (state, { payload }) => {
      state.message = { payload }
    },
    clearMessage: (state) => {
      state.message = undefined
    },
    onLoadBook: (state, { payload = [] }) => {
      state.isLoadingEvents = false
      //
      payload.forEach(book => {
        const exists = state.events?.some(dbBook => dbBook.id === book.id)
        if (!exists) {
          state.bookList.push(book)
        }
      })
    }
  }
})
export const { onAddBook, errorToAdd, clearMessage, onLoadBook } = bookSlice.actions
