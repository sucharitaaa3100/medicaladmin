import { Box, Typography, Grid, Card, CardContent } from '@mui/material'
import styles from './Dashboard.module.scss'

const Dashboard = () => {
  return (
    <Box className={styles.wrapper}>
      <Typography variant="h4" className={styles.heading}>
        Welcome to MedAdmin Dashboard
      </Typography>

      <Grid container spacing={3} className={styles.grid}>
        <Grid item xs={12} md={4}>
          <Card className={styles.card}>
            <CardContent>
              <Typography className={styles.title}>Total Devices</Typography>
              <Typography className={styles.value}>148</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={styles.card}>
            <CardContent>
              <Typography className={styles.title}>Active Installations</Typography>
              <Typography className={styles.value}>126</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={styles.card}>
            <CardContent>
              <Typography className={styles.title}>Pending Services</Typography>
              <Typography className={styles.value}>22</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard

