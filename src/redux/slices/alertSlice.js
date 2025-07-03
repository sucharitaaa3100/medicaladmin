import { createSlice } from '@reduxjs/toolkit'

const loadFromLocalStorage = () => {
  try {
    const stored = localStorage.getItem('alerts')
    return stored ? JSON.parse(stored) : []
  } catch (e) {
    console.error('Failed to load alerts from localStorage:', e)
    return []
  }
}

const saveToLocalStorage = (alerts) => {
  try {
    localStorage.setItem('alerts', JSON.stringify(alerts))
  } catch (e) {
    console.error('Failed to save alerts to localStorage:', e)
  }
}

const initialState = {
  alerts: loadFromLocalStorage()
}

const alertSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    addAlert: (state, action) => {
      state.alerts.push(action.payload)
      saveToLocalStorage(state.alerts)
    },
    updateAlert: (state, action) => {
      const index = state.alerts.findIndex(alert => alert.id === action.payload.id)
      if (index !== -1) {
        state.alerts[index] = action.payload
        saveToLocalStorage(state.alerts)
      }
    },
    deleteAlert: (state, action) => {
      state.alerts = state.alerts.filter(alert => alert.id !== action.payload)
      saveToLocalStorage(state.alerts)
    },
    setAlerts: (state, action) => {
      state.alerts = action.payload
      saveToLocalStorage(state.alerts)
    }
  }
})

export const { addAlert, updateAlert, deleteAlert, setAlerts } = alertSlice.actions
export default alertSlice.reducer
