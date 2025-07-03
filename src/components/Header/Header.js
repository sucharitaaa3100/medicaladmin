import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material'
import { useColorMode } from '../../theme/ThemeContext'
import styles from './Header.module.scss'

const Header = () => {
  const { mode, toggleColorMode } = useColorMode()

  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Typography className={styles.logo}>MedAdmin</Typography>
        <div className={styles.grow} />
        <Box>
          <IconButton onClick={toggleColorMode} color="inherit">
            <i className={`fas ${mode === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header


