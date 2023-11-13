import { createSlice } from '@reduxjs/toolkit'
export const forumSlice = createSlice({
  name: 'foro',
  initialState: {
    isLoadingForums: true,
    forumList: [],
    message: undefined
  },
  reducers: {
    //* AGREGAR
    onAddForum: (state, { payload = [] }) => {
      state.forumList.push(payload)
      state.message = undefined
    },
    //* ELIMINAR
    onDeleteForum: (state, { payload }) => {
      state.forumList = state.forumList.filter(forum => forum.id !== payload)
    },
    //* EDITAR
    onUpdateForum: (state, { payload }) => {
      state.forumList = state.forumList.map(forum => {
        if (forum.id === parseInt(payload.id)) {
          return payload
        }
        return forum
      })
    },
    //* CARGAR FOROS DE BD
    onLoadForum: (state, { payload = [] }) => {
      state.isLoadingForums = false
      //
      payload.forEach(forum => {
        const exist = state.forumList.some(dbForum => dbForum.id === forum.id)
        if (!exist) {
          state.forumList.push(forum)
        }
      })
    },
    //* LIMPIAR MENSAJE DE ERROR
    clearMessage: (state) => {
      state.message = undefined
    }
  }
}
)
export const {
  onAddForum,
  onDeleteForum,
  onUpdateForum,
  onLoadForum
} = forumSlice.actions
