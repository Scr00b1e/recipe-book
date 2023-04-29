import React from 'react'
import styles from './intro.module.scss'
import Link from 'next/link'

const Intro = () => {
  return (
    <div className={styles.intro}>
      <img src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2021/03/island-kitchen-layout.jpg" alt="" />
      <div className={styles.intro__words}>
        <h1 className={styles.intro__title}>Don't know what to eat?</h1>
        <p className={styles.intro__text}>Just check our recipes!</p>
        <Link href={'/breakfast'}>
          <button className='btn'>Click here</button>
        </Link>
      </div>
    </div>
  )
}

export default Intro