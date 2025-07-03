// src/components/Layout/Layout.jsx
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import styles from './Layout.module.scss'
import { useColorMode } from '../../theme/ThemeContext'

const Layout = () => {
  const { mode } = useColorMode()

  return (
    <div className={`${styles.layout} ${mode === 'dark' ? styles.dark : ''}`}>
      <Sidebar />
      <div className={styles.contentArea}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout

