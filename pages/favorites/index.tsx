import React from 'react'
import styles from './favorites.module.scss'

const Favorites: React.FC = () => {
  return (
    <div className={styles.favorite}>
      <div className='container'>
        <h1 className={styles.favorite__title}>
          hello world
        </h1>
      </div>
    </div>
  )
}

export default Favorites