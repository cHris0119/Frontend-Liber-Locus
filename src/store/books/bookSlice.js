import { createSlice } from '@reduxjs/toolkit'
export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    isLoadingBooks: true,
    bookList: [],
    message: undefined
  },
  reducers: {
    //* AGREGAR
    onAddBook: (state, { payload }) => {
      state.bookList.push(payload)
      state.message = undefined
    },
    //* ELIMINAR
    onDeleteBook: (state, { payload }) => {
      state.bookList = state.bookList.filter(book => book.id !== payload)
    },
    //* EDITAR
    onUpdateBook: (state, { payload }) => {
      state.bookList = state.bookList.map(book => {
        if (book.id === parseInt(payload.id)) {
          return payload
        }
        return book
      })
    },
    //* ERROR AL AGREGAR
    errorToAdd: (state, { payload }) => {
      state.message = { payload }
    },
    //* LIMPIAR MENSAJE DE ERROR
    clearMessage: (state) => {
      state.message = undefined
    },
    //* CARGAR LIBROS DE BD
    onLoadBook: (state, { payload = [] }) => {
      state.isLoadingBooks = false
      //
      payload.forEach(book => {
        const exists = state.bookList.some(dbBook => dbBook.id === book.id)
        if (!exists) {
          state.bookList.push(book)
        }
      })
    }
  }
})
export const {
  onAddBook,
  errorToAdd,
  clearMessage,
  onLoadBook,
  onDeleteBook,
  onUpdateBook
} = bookSlice.actions
