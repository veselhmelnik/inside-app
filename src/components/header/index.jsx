import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, Layout } from 'antd'
import logo from 'assets/images/logo-white.png'
import { NAV_BUTTONS } from 'helpers/routes'
import { User } from './User'
import styles from './Header.module.scss'

const { Header: AntHeader } = Layout

export const Header = () => {
  const navigate = useNavigate()

  const getItems = () =>
    NAV_BUTTONS.map(item => ({
      ...item,
      onClick: () => navigate(item.link),
    }))
  const items = getItems()

  return (
    <AntHeader className={styles.Header}>
      <img src={logo} alt="logo" className={styles.logoImage} />
      <Menu
        className={styles.Menu}
        theme="dark"
        mode="horizontal"
        items={items}
        defaultSelectedKeys={[items[0].key]}
        inlineCollapsed={false}
      />
      <User />
    </AntHeader>
  )
}
