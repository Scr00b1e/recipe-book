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
            <img src="./twitter.png" alt="" className={styles.footer__social}/>
            <img src="./telegram.png" alt="" className={styles.footer__social}/>
            <img src="./instagram.png" alt="" className={styles.footer__social}/>
          </div>
        </div>
      </div>
    </div>
  )
}
