import React from 'react'
import { useSelector } from 'react-redux'
import FavItem, { FavProps } from '../../component/favItem/FavItem'
import Modal from '../../component/modal/Modal'
import { selectFav } from '../../redux/slices/favoritesSlice'
import styles from './favorites.module.scss'

const Favorites: React.FC = () => {
  const items = useSelector(selectFav)
  const [modalOpen, setModalOpen] = React.useState(false)
  const onClickClear = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <div className={styles.favorite}>
      <div className='container'>
        <div className={styles.favorite__words}>
          <h1 className={styles.favorite__title}>Favorites</h1>
          <h1 className={styles.favorite__clear} onClick={onClickClear}>
            Clear All
          </h1>
        </div>
        <div className={styles.favorite__content}>
          {
            Object.values(items).map((obj: FavProps) => (
              <FavItem {...obj} key={obj.id} />
            ))
          }
          {modalOpen && <Modal setModalOpen={setModalOpen} />}
        </div>
      </div>
    </div>
  )
}

export default Favorites