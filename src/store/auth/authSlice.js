import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // authenticated o 'not-authenticated'
    user: {},
    errorMessage: undefined
  },
  reducers: {

    onChecking: (state) => {
      state.status = 'checking'
      state.user = {}
      state.errorMessage = undefined
    },

    onLogin: (state, { payload }) => {
      state.status = 'authenticated'
      state.user = payload
      state.errorMessage = undefined
    },

    onRegister: (state, { payload }) => {
      state.status = 'not-authenticated'
      state.user = payload
      state.errorMessage = undefined
    },

    onLogout: (state, { payload }) => {
      state.status = 'not-authenticated'
      state.user = {}
      state.errorMessage = payload
    },

    clearErrorMessage: (state) => {
      state.errorMessage = undefined
    },

    onEditUser: (state, { payload }) => {
      console.log('aasdasd', payload)
      state.user = {
        ...state.user,
        ...payload
      }
    },
    onEditDirection: (state, { payload }) => {
      state.user.direction = payload
    }
  }

})
export const {
  onChecking,
  onLogin,
  onLogout,
  clearErrorMessage,
  onRegister,
  onEditUser,
  onEditDirection
} = authSlice.actions
