import {
  TextField,
  Button,
  Grid,
  Typography,
  
  Paper,
  MenuItem
} from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styles from './InstallationForm.module.scss'
import { useSnackbar } from 'notistack'

const InstallationForm = () => {
  const { enqueueSnackbar } = useSnackbar()

  const formik = useFormik({
    initialValues: {
      deviceId: '',
      facility: '',
      engineer: '',
      date: '',
      trainingComplete: '',
      photo: null
    },
    validationSchema: Yup.object({
      deviceId: Yup.string().required('Required'),
      facility: Yup.string().required('Required'),
      engineer: Yup.string().required('Required'),
      date: Yup.string().required('Required'),
      trainingComplete: Yup.string().required('Required')
    }),
    onSubmit: (values, { resetForm }) => {
      const existing = JSON.parse(localStorage.getItem('installations')) || []
      const updated = [...existing, values]
      localStorage.setItem('installations', JSON.stringify(updated))
      enqueueSnackbar('✅ Installation submitted successfully!', { variant: 'success' })
      resetForm()
    }
  })

  return (
    <Paper className={styles.wrapper} elevation={3}>
      <Typography variant="h5" className={styles.heading}>
        Log New Installation
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Device ID"
              fullWidth
              name="deviceId"
              value={formik.values.deviceId}
              onChange={formik.handleChange}
              error={formik.touched.deviceId && Boolean(formik.errors.deviceId)}
              helperText={formik.touched.deviceId && formik.errors.deviceId}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Facility"
              fullWidth
              name="facility"
              value={formik.values.facility}
              onChange={formik.handleChange}
              error={formik.touched.facility && Boolean(formik.errors.facility)}
              helperText={formik.touched.facility && formik.errors.facility}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Engineer"
              fullWidth
              name="engineer"
              value={formik.values.engineer}
              onChange={formik.handleChange}
              error={formik.touched.engineer && Boolean(formik.errors.engineer)}
              helperText={formik.touched.engineer && formik.errors.engineer}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Installation Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Training Completed"
              select
              fullWidth
              name="trainingComplete"
              value={formik.values.trainingComplete}
              onChange={formik.handleChange}
              error={
                formik.touched.trainingComplete &&
                Boolean(formik.errors.trainingComplete)
              }
              helperText={
                formik.touched.trainingComplete && formik.errors.trainingComplete
              }
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography className={styles.sub}>Upload Installation Photo</Typography>
            <input
              type="file"
              accept=".png,.jpg,.jpeg"
              onChange={(e) =>
                formik.setFieldValue('photo', e.currentTarget.files[0])
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" className={styles.btn} variant="contained">
              Submit Installation
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default InstallationForm
