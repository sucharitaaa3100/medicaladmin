import { createSlice } from '@reduxjs/toolkit'

const savedDevices = localStorage.getItem('devices')
const initialState = {
  devices: savedDevices ? JSON.parse(savedDevices) : []
}

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    addDevice: (state, action) => {
      state.devices.push(action.payload)
      localStorage.setItem('devices', JSON.stringify(state.devices))
    },
    updateDevice: (state, action) => {
      const index = state.devices.findIndex(d => d.id === action.payload.id)
      if (index !== -1) {
        state.devices[index] = action.payload
        localStorage.setItem('devices', JSON.stringify(state.devices))
      }
    },
    deleteDevice: (state, action) => {
      state.devices = state.devices.filter(d => d.id !== action.payload)
      localStorage.setItem('devices', JSON.stringify(state.devices))
    },
    setDevices: (state, action) => {
      state.devices = action.payload
      localStorage.setItem('devices', JSON.stringify(state.devices))
    }
  }
})

export const {
  addDevice,
  updateDevice,
  deleteDevice,
  setDevices
} = deviceSlice.actions

export default deviceSlice.reducer
