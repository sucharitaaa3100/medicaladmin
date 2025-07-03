import { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  MenuItem,
  useTheme,
  Grid
} from '@mui/material'
import styles from './AMCTracker.module.scss'

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-GB')
}

const isBefore = (d1, d2) => new Date(d1).getTime() < new Date(d2).getTime()
const addDays = (dateStr, days) => {
  const date = new Date(dateStr)
  date.setDate(date.getDate() + days)
  return date
}

const AMCTracker = () => {
  const theme = useTheme()
  const [contracts, setContracts] = useState([])
  const [formData, setFormData] = useState({
    deviceId: '',
    facility: '',
    type: 'AMC',
    startDate: '',
    endDate: ''
  })

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('contracts')) || []
    setContracts(saved)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updated = [...contracts, formData]
    localStorage.setItem('contracts', JSON.stringify(updated))
    setContracts(updated)
    setFormData({ deviceId: '', facility: '', type: 'AMC', startDate: '', endDate: '' })
  }

  const handleDelete = (index) => {
    const updated = contracts.filter((_, i) => i !== index)
    localStorage.setItem('contracts', JSON.stringify(updated))
    setContracts(updated)
  }

  const exportCSV = () => {
    const headers = ['Device ID', 'Facility', 'Type', 'Start Date', 'End Date']
    const rows = contracts.map(c =>
      [c.deviceId, c.facility, c.type, formatDate(c.startDate), formatDate(c.endDate)]
    )
    const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.setAttribute('download', 'amc-cmc-contracts.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const today = new Date()
  const warningDate = addDays(today, 30)

  return (
    <Box className={styles.wrapper}>
      <Typography variant="h5" className={styles.heading}>
        AMC/CMC Contracts
      </Typography>

      <Paper className={styles.formCard}>
        <Typography variant="h6" className={styles.subheading}>
          Add New Contract
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                name="deviceId"
                label="Device ID"
                fullWidth
                value={formData.deviceId}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="facility"
                label="Facility"
                fullWidth
                value={formData.facility}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                name="type"
                label="Contract Type"
                select
                fullWidth
                value={formData.type}
                onChange={handleChange}
                required
              >
                <MenuItem value="AMC">AMC</MenuItem>
                <MenuItem value="CMC">CMC</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                name="startDate"
                label="Start Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                name="endDate"
                label="End Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" className={styles.exportBtn} fullWidth sx={{ mt: 2 }}>
            Save Contract
          </Button>
        </form>
      </Paper>

      <Button className={styles.exportBtn} onClick={exportCSV}>
        Export CSV
      </Button>

      {contracts.length === 0 ? (
        <Typography className={styles.empty}>No contracts found.</Typography>
      ) : (
        contracts.map((contract, index) => {
          const isExpiringSoon = isBefore(contract.endDate, warningDate)
          return (
            <Paper
              key={index}
              className={`${styles.contractCard} ${isExpiringSoon ? styles.expiring : ''}`}
            >
              <Typography><strong>Device ID:</strong> {contract.deviceId}</Typography>
              <Typography><strong>Facility:</strong> {contract.facility}</Typography>
              <Typography><strong>Type:</strong> {contract.type}</Typography>
              <Typography><strong>Start Date:</strong> {formatDate(contract.startDate)}</Typography>
              <Typography><strong>End Date:</strong> {formatDate(contract.endDate)}</Typography>
              {isExpiringSoon && (
                <Typography className={styles.warning}>⚠ Expiring Soon</Typography>
              )}
              <Button
                variant="text"
                color="error"
                size="small"
                onClick={() => handleDelete(index)}
                sx={{ mt: 1 }}
              >
                Delete
              </Button>
            </Paper>
          )
        })
      )}
    </Box>
  )
}

export default AMCTracker

