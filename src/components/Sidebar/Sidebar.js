import { NavLink, useLocation } from 'react-router-dom'
import styles from './Sidebar.module.scss'

const navItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Inventory', path: '/inventory' },
  { label: 'Installation', path: '/installation' },
  { label: 'Service Logs', path: '/service' },
  { label: 'AMC Tracker', path: '/amc' },
  { label: 'Alerts', path: '/alerts' }
]

const Sidebar = () => {
  const location = useLocation()

  return (
    <div className={styles.sidebar}>
      <div className={styles.navList}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
