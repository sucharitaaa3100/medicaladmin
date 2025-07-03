import { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  MenuItem,
  Chip
} from '@mui/material'
import styles from './AlertLogs.module.scss'

const severityOptions = ['Low', 'Medium', 'High']

const getSeverityColor = (level) => {
  switch (level) {
    case 'Low':
      return 'success'
    case 'Medium':
      return 'warning'
    case 'High':
      return 'error'
    default:
      return 'default'
  }
}

const AlertLogs = () => {
  const [alerts, setAlerts] = useState([])
  const [formData, setFormData] = useState({
    deviceId: '',
    issue: '',
    severity: '',
    photo: ''
  })

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('alerts')) || []
    setAlerts(stored)
  }, [])

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'photo') {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, photo: reader.result }))
      }
      if (files[0]) reader.readAsDataURL(files[0])
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newAlert = {
      ...formData,
      id: Date.now()
    }
    const updated = [...alerts, newAlert]
    localStorage.setItem('alerts', JSON.stringify(updated))
    setAlerts(updated)
    setFormData({ deviceId: '', issue: '', severity: '', photo: '' })
  }

  return (
    <Box className={styles.wrapper}>
      <Typography variant="h5" className={styles.heading}>Alert Form</Typography>

      <Paper className={styles.formCard}>
        <form onSubmit={handleSubmit}>
          <TextField
            name="deviceId"
            label="Device ID"
            fullWidth
            margin="normal"
            value={formData.deviceId}
            onChange={handleChange}
            required
          />
          <TextField
            name="issue"
            label="Issue Description"
            fullWidth
            margin="normal"
            multiline
            rows={3}
            value={formData.issue}
            onChange={handleChange}
            required
          />
          <TextField
            name="severity"
            label="Severity"
            select
            fullWidth
            margin="normal"
            value={formData.severity}
            onChange={handleChange}
            required
          >
            {severityOptions.map((option) => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </TextField>
          <Button variant="outlined" component="label" fullWidth sx={{ my: 2 }}>
            Upload Photo
            <input type="file" name="photo" accept="image/*" hidden onChange={handleChange} />
          </Button>
          {formData.photo && (
            <img src={formData.photo} alt="Alert" className={styles.previewImage} />
          )}
          <Button type="submit" variant="contained" fullWidth className={styles.btn}>
            Submit Alert
          </Button>
        </form>
      </Paper>

      <Typography variant="h6" sx={{ mt: 4 }}>Submitted Alerts</Typography>

      {alerts.length === 0 ? (
        <Typography sx={{ mt: 2 }}>No alerts logged yet.</Typography>
      ) : (
        alerts.map((alert) => (
          <Paper key={alert.id} className={styles.alertCard}>
            <Typography><strong>Device ID:</strong> {alert.deviceId}</Typography>
            <Typography><strong>Issue:</strong> {alert.issue}</Typography>
            <Box sx={{ mt: 1 }}>
              <Chip
                label={`Severity: ${alert.severity}`}
                color={getSeverityColor(alert.severity)}
                variant="filled"
                size="small"
              />
            </Box>
            {alert.photo && (
              <img src={alert.photo} alt="Uploaded" className={styles.previewImage} />
            )}
          </Paper>
        ))
      )}
    </Box>
  )
}

export default AlertLogs
