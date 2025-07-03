import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'


import { Provider } from 'react-redux'
import { store } from './redux/store'



import { SnackbarProvider } from 'notistack'
import CustomThemeProvider from './theme/ThemeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomThemeProvider>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          autoHideDuration={3000}
        >
          <App />
        </SnackbarProvider>
      </CustomThemeProvider>
    </Provider>
  </React.StrictMode>
)
