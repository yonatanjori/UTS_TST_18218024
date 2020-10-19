import React, { ReactElement } from 'react'
import styles from './Header.module.scss'

const Header = () : ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Web Application Simple Form-DB Integration UTS II3160 Teknologi Sistem Terintegrasi
      </div>
      <div className={styles.title}>
        18218024 Yonatan Jori Saputro
      </div>
    </div>
  )
}

export default Header
