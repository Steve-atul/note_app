import React from 'react'
import styles from './Right.module.css'
import bg from '../assets/bg-img.png'
import lock from '../assets/lock.png'
export default function Right() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={bg} alt="sdfdsfsdf" />
      </div>
      <h1 className={styles.title}>Pocket Notes</h1>
      <p className={styles.para}>Send and receive messages without keeping your phone online.
      Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      <p className={styles.ete}><img src={lock} alt="fgdfg" /> end-to-end encrypted</p>
    </div>
  )
}
