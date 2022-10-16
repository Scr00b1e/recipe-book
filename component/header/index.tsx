import React from 'react'
import styles from './header.module.scss'

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__left}>
          <div className={styles.header__name}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" 
              alt=""
              className={styles.header__img} />
              <h1 className={styles.header__title}>
                Recipes
              </h1>
          </div>
          <nav className={styles.header__nav}>
            <div className={styles.header__item}>
              Recipes
            </div>
            <div className={styles.header__item}>
              Quick & Easy
            </div>
            <div className={styles.header__item}>
              Table Talk
            </div>
            <div className={styles.header__item}>
              Holidays & Seasons
            </div>
            <div className={styles.header__item}>
              About Me
            </div>
          </nav>
        </div>
        <div className={styles.header__right}>
          <img src="../favorite.svg" alt="" />
          <img src="../search.svg" alt="" />
        </div>
      </div>
    </div>
  )
}
