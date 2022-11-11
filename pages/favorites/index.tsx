import React from 'react'
import { useSelector } from 'react-redux'
import FavItem, { FavProps } from '../../component/favItem/FavItem'
import { selectFav } from '../../redux/slices/favoritesSlice'
import styles from './favorites.module.scss'

const Favorites: React.FC = () => {
  const items = useSelector(selectFav)
  return (
    <div className={styles.favorite}>
      <div className='container'>
        <h1 className={styles.favorite__title}>
          Clear All
        </h1>
        <div className={styles.favorite__content}>
          {
            Object.values(items).map((obj: FavProps) => (
              <FavItem {...obj} key={obj.id}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Favorites