import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addDevice, setDevices } from '../../redux/slices/deviceSlice'
import styles from './DeviceTable.module.scss'

const statusOptions = ['Online', 'Offline', 'Maintenance']
const amcOptions = ['Valid', 'Expired', 'None']

const DeviceList = () => {
  const dispatch = useDispatch()
  const devices = useSelector(state => state.device.devices)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('devices')) || []
    dispatch(setDevices(saved))
  }, [dispatch])

  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      type: '',
      facility: '',
      status: 'Online',
      amcStatus: 'Valid'
    },
    validationSchema: Yup.object({
      id: Yup.string().required('Required'),
      name: Yup.string().required('Required'),
      type: Yup.string().required('Required'),
      facility: Yup.string().required('Required')
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(addDevice(values))
      const updated = [...devices, values]
      localStorage.setItem('devices', JSON.stringify(updated))
      dispatch(setDevices(updated))
      resetForm()
    }
  })

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Device List</Typography>

      <Paper className={styles.card} sx={{ mb: 4, p: 2 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                size="small"
                label="Device ID"
                name="id"
                value={formik.values.id}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                size="small"
                label="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                size="small"
                label="Type"
                name="type"
                value={formik.values.type}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                size="small"
                label="Facility"
                name="facility"
                value={formik.values.facility}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth size="small">
                <InputLabel>Status</InputLabel>
                <Select
                  name="status"
                  label="Status"
                  value={formik.values.status}
                  onChange={formik.handleChange}
                >
                  {statusOptions.map(opt => (
                    <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth size="small">
                <InputLabel>AMC Status</InputLabel>
                <Select
                  name="amcStatus"
                  label="AMC Status"
                  value={formik.values.amcStatus}
                  onChange={formik.handleChange}
                >
                  {amcOptions.map(opt => (
                    <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">Add Device</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {devices.length === 0 ? (
        <Typography>No devices found.</Typography>
      ) : (
        devices.map((device, idx) => (
          <Paper key={idx} className={styles.card}>
            <Typography className={styles.name}>{device.name}</Typography>
            <Typography className={styles.meta}><strong>ID:</strong> {device.id}</Typography>
            <Typography className={styles.meta}><strong>Type:</strong> {device.type}</Typography>
            <Typography className={styles.meta}><strong>Facility:</strong> {device.facility}</Typography>
            <div className={`status ${device.status.toLowerCase()}`}>{device.status}</div>
            <Typography className={styles.contract}><strong>AMC:</strong> {device.amcStatus}</Typography>
          </Paper>
        ))
      )}
    </Box>
  )
}

export default DeviceList
