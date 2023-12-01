import { createSlice } from '@reduxjs/toolkit'
export const salesSlice = createSlice({
  name: 'sales',
  initialState: {
    isLoadingSales: true,
    salesList: [],
    message: undefined
  },
  reducers: {
    //* CARGAR VENTAS DE BD
    onLoadSales: (state, { payload = [] }) => {
      state.isLoadingSales = false
      //
      payload.forEach(sale => {
        const exists = state.salesList.some(dbSales => dbSales.id === sale.id)
        if (!exists) {
          state.salesList.push(sale)
        }
      })
    },
    onUpdateSale: (state, { payload }) => {
      state.salesList = state.salesList.map(sale => {
        if (sale.id === parseInt(payload.id)) {
          return payload
        }
        return sale
      })
    }
  }
})
export const { onLoadSales, onUpdateSales } = salesSlice.actions
