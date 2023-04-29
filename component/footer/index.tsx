import Link from 'next/link'
import React from 'react'
import styles from './footer.module.scss'

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <div className={styles.footer__left}>
            <Link href={'/'}>
              <div className={styles.footer__name}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
                  alt=""
                  className={styles.footer__img} />
                <h1 className={styles.footer__title}>
                  Recipes
                </h1>
              </div>
            </Link>
          </div>
          <div className={styles.footer__right}>
            <a href="https://twitter.com/scr00b1e" target='_blank'>
              <img src="./twitter.png" alt="" className={styles.footer__social} />
            </a>
            <a href="https://t.me/scr00b1e" target='_blank'>
              <img src="./telegram.png" alt="" className={styles.footer__social} />
            </a>
            <a href="https://github.com/Scr00b1e" target='_blank'>
              <img src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="" className={styles.footer__social} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
