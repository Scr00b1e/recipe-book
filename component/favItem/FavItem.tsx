// import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/slices/favoritesSlice'
import styles from '../item/item.module.scss'

export type FavProps = {
  id: string
  title: string
  type: string
  img: string
  time: number
}

const FavItem: React.FC<FavProps> = ({ id, title, type, img, time }) => {
  const dispatch = useDispatch()
  const onClickRemove = () => {
    dispatch(removeItem(id))
  }

  return (
    // <Link href={`/${apiUrl}/${id}`}>
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={img} alt="" className={styles.item__img} />
        <img
          src="../favorite-click.png"
          alt=""
          onClick={onClickRemove}
          className={styles.item__heart} />
      </div>
      <span className={styles.item__type}>{type}</span>
      <h1 className={styles.item__title}>{title}</h1>
      <div className={styles.item__bottom}>
        {time && <p className={styles.item__text}>{time} mins</p>}
      </div>
    </div>
    // </Link>
  )
}

export default FavItem