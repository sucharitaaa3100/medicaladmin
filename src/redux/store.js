import { configureStore } from '@reduxjs/toolkit'
import deviceReducer from './slices/deviceSlice'
import serviceReducer from './slices/serviceSlice'
import alertReducer from './slices/alertSlice'

export const store = configureStore({
  reducer: {
    device: deviceReducer,
    service: serviceReducer,  
    alerts: alertReducer
  }
})
