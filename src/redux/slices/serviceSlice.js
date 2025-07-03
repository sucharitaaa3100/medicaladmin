import { createSlice } from '@reduxjs/toolkit'

const savedLogs = localStorage.getItem('serviceLogs')
const initialState = {
  logs: savedLogs ? JSON.parse(savedLogs) : []
}

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    addServiceLog: (state, action) => {
      state.logs.push(action.payload)
      localStorage.setItem('serviceLogs', JSON.stringify(state.logs))
    },
    updateServiceLog: (state, action) => {
      const index = state.logs.findIndex(log => log.id === action.payload.id)
      if (index !== -1) {
        state.logs[index] = action.payload
        localStorage.setItem('serviceLogs', JSON.stringify(state.logs))
      }
    },
    deleteServiceLog: (state, action) => {
      state.logs = state.logs.filter(log => log.id !== action.payload)
      localStorage.setItem('serviceLogs', JSON.stringify(state.logs))
    },
    setServiceLogs: (state, action) => {
      state.logs = action.payload
      localStorage.setItem('serviceLogs', JSON.stringify(state.logs))
    }
  }
})

export const {
  addServiceLog,
  updateServiceLog,
  deleteServiceLog,
  setServiceLogs
} = serviceSlice.actions

export default serviceSlice.reducer

