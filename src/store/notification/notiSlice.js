import { createSlice } from '@reduxjs/toolkit'
export const NotificationSlice = createSlice({
  name: 'notification',
  initialState: {
    isLoadingNoti: true,
    notificationList: [],
    message: undefined
  },
  reducers: {

    //* AGREGAR NOTIFICACIONES
    onAddNotification: (state, payload) => {
      state.notificationList.push(payload)
      state.message = undefined
    },

    //* CARGAR NOTIFICACIONES
    onLoadNotification: (state, { payload = [] }) => {
      state.isLoadingNoti = false
      payload.forEach(noti => {
        const exists = state.isLoadingNoti.some(dbNoti => dbNoti.id === noti.id)
        if (!exists) {
          state.notificationList.push(noti)
        }
      })
    }
  }
})
export const { onAddNotification, onLoadNotification } = NotificationSlice.actions
