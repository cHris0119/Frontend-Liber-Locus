import { createSlice } from '@reduxjs/toolkit'
export const auctionSlice = createSlice({
  name: 'auction',
  initialState: {
    isLoadingAuction: true,
    auctionList: [],
    message: undefined
  },
  reducers: {
    //* CARGAR SUBASTAS DE BD

    onLoadAuction: (state, { payload = [] }) => {
      state.isLoadingAuction = false

      payload.forEach(auction => {
        const exists = state.auctionList.some(dbAuction => dbAuction.id === auction.id)
        if (!exists) {
          state.auctionList.push(auction)
        }
      })
    },

    //* AGREGAR
    onAddAuction: (state, { payload }) => {
      state.auctionList.push(payload)
      state.message = undefined
    },

    //* ELIMINAR

    onDeleteAuction: (state, { payload }) => {
      state.auctionList = state.auctionList.filter(auction => auction.id !== payload)
    },

    //* EDITAR

    onUpdateAuction: (state, { payload }) => {
      state.auctionList = state.auctionList.map(auction => {
        if (auction.id === parseInt(payload.id)) {
          return payload
        }
        return auction
      })
    }
  }
})
export const {
  onLoadAuction,
  onAddAuction,
  onDeleteAuction,
  onUpdateAuction
} = auctionSlice.actions
