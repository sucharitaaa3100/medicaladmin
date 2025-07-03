import { Box, Typography, Paper, Button, TextField, Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { deleteServiceLog, updateServiceLog } from '../../redux/slices/serviceSlice'
import { useState } from 'react'
import ServiceForm from './ServiceForm'

const ServiceLogs = () => {
  const logs = useSelector((state) => state.service.logs)
  const dispatch = useDispatch()

  const [editingId, setEditingId] = useState(null)
  const [editData, setEditData] = useState({})

  const handleDelete = (id) => {
    dispatch(deleteServiceLog(id))
  }

  const handleEdit = (log) => {
    setEditingId(log.id)
    setEditData(log)
  }

  const handleSave = () => {
    dispatch(updateServiceLog(editData))
    setEditingId(null)
  }

  const handleCancel = () => {
    setEditingId(null)
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Service Logs</Typography>

      <ServiceForm />

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>Logged Services</Typography>

      {logs.length === 0 ? (
        <Typography>No logs available.</Typography>
      ) : (
        logs.map((log) => (
          <Paper key={log.id} sx={{ p: 2, mb: 2 }}>
            {editingId === log.id ? (
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Device ID"
                    value={editData.deviceId}
                    onChange={(e) => setEditData({ ...editData, deviceId: e.target.value })}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Serviced By"
                    value={editData.servicedBy}
                    onChange={(e) => setEditData({ ...editData, servicedBy: e.target.value })}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Issue"
                    value={editData.issue}
                    onChange={(e) => setEditData({ ...editData, issue: e.target.value })}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Resolution"
                    value={editData.resolution}
                    onChange={(e) => setEditData({ ...editData, resolution: e.target.value })}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="date"
                    label="Service Date"
                    InputLabelProps={{ shrink: true }}
                    value={editData.serviceDate}
                    onChange={(e) => setEditData({ ...editData, serviceDate: e.target.value })}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button onClick={handleSave} variant="contained" sx={{ mr: 1 }}>
                    Save
                  </Button>
                  <Button onClick={handleCancel} variant="outlined">
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            ) : (
              <>
                <Typography><strong>Device ID:</strong> {log.deviceId}</Typography>
                <Typography><strong>Issue:</strong> {log.issue}</Typography>
                <Typography><strong>Resolution:</strong> {log.resolution}</Typography>
                <Typography><strong>Serviced By:</strong> {log.servicedBy}</Typography>
                <Typography><strong>Service Date:</strong> {log.serviceDate}</Typography>
                <Box sx={{ mt: 2 }}>
                  <Button onClick={() => handleEdit(log)} variant="outlined" sx={{ mr: 1 }}>
                    Edit
                  </Button>
                  <Button onClick={() => handleDelete(log.id)} variant="contained" color="error">
                    Delete
                  </Button>
                </Box>
              </>
            )}
          </Paper>
        ))
      )}
    </Box>
  )
}

export default ServiceLogs
