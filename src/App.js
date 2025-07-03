import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { CssBaseline } from '@mui/material'
import { ColorModeContext } from './theme/ThemeContext'
import Layout from './components/Layout/Layout'
import Dashboard from './modules/Dashboard/Dashboard'
import InstallationForm from './modules/Installation/InstallationForm'
import DeviceList from './modules/Inventory/DeviceList'
import ServiceLogs from './modules/Service/ServiceLogs'
import AmcPage from './modules/AMC/AMCTracker'
import AlertsPage from './modules/Alerts/AlertLogs'

const App = () => {
  const { mode } = useContext(ColorModeContext)

  return (
    <div className={mode === 'dark' ? 'dark' : ''}>
      <Router>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="inventory" element={<DeviceList />} />
            <Route path="installation" element={<InstallationForm />} />
            <Route path="service" element={<ServiceLogs />} />
            <Route path="amc" element={<AmcPage />} />
            <Route path="alerts" element={<AlertsPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
