import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper
} from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styles from './ServiceForm.module.scss'
import { useSnackbar } from 'notistack'
import { useDispatch } from 'react-redux'
import { addServiceLog } from '../../redux/slices/serviceSlice'

const ServiceForm = () => {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const formik = useFormik({
    initialValues: {
      deviceId: '',
      issue: '',
      resolution: '',
      servicedBy: '',
      serviceDate: ''
    },
    validationSchema: Yup.object({
      deviceId: Yup.string().required('Required'),
      issue: Yup.string().required('Required'),
      resolution: Yup.string().required('Required'),
      servicedBy: Yup.string().required('Required'),
      serviceDate: Yup.string().required('Required')
    }),
    onSubmit: (values, { resetForm }) => {
      const newLog = {
        ...values,
        id: Date.now().toString()
      }

      dispatch(addServiceLog(newLog))
      enqueueSnackbar('Service record added!', { variant: 'success' })
      resetForm()
    }
  })

  return (
    <Paper className={styles.wrapper} elevation={3}>
      <Typography variant="h5" className={styles.title}>Log Service</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Device ID"
              name="deviceId"
              fullWidth
              value={formik.values.deviceId}
              onChange={formik.handleChange}
              error={formik.touched.deviceId && Boolean(formik.errors.deviceId)}
              helperText={formik.touched.deviceId && formik.errors.deviceId}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Serviced By"
              name="servicedBy"
              fullWidth
              value={formik.values.servicedBy}
              onChange={formik.handleChange}
              error={formik.touched.servicedBy && Boolean(formik.errors.servicedBy)}
              helperText={formik.touched.servicedBy && formik.errors.servicedBy}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Issue"
              name="issue"
              fullWidth
              multiline
              rows={2}
              value={formik.values.issue}
              onChange={formik.handleChange}
              error={formik.touched.issue && Boolean(formik.errors.issue)}
              helperText={formik.touched.issue && formik.errors.issue}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Resolution"
              name="resolution"
              fullWidth
              multiline
              rows={2}
              value={formik.values.resolution}
              onChange={formik.handleChange}
              error={formik.touched.resolution && Boolean(formik.errors.resolution)}
              helperText={formik.touched.resolution && formik.errors.resolution}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Service Date"
              type="date"
              name="serviceDate"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={formik.values.serviceDate}
              onChange={formik.handleChange}
              error={formik.touched.serviceDate && Boolean(formik.errors.serviceDate)}
              helperText={formik.touched.serviceDate && formik.errors.serviceDate}
            />
          </Grid>
          <Grid item xs={12}>
            <Button className={styles.btn} variant="contained" type="submit">
              Submit Service
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default ServiceForm
