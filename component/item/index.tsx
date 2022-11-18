import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../../redux/slices/favoritesSlice'
import styles from './item.module.scss'

export type RecipesProps = {
  id: string
  img: string
  title: string
  time: number
  type: string
  apiUrl: string
}

export const Item: React.FC<RecipesProps> = ({
  id,
  img,
  title,
  time,
  type,
  apiUrl }) => {

  const dispatch = useDispatch()
  const [clicked, setClicked] = React.useState(false)
  const onClickFav = () => {
    const item = {
      id,
      img,
      title,
      time,
      type
    }
    dispatch(addItem(item))
    setClicked(!clicked)
    if (clicked) {
      dispatch(removeItem(id))
    }
  }

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <Link href={`/${apiUrl}/${id}`}>
          <img src={img} alt="" className={styles.item__img} />
        </Link>
        <img src={clicked ? "../favorite-click.png" : "../favorite.png"} alt="" className={styles.item__heart}
          onClick={onClickFav} />
      </div>
      <span className={styles.item__type}>{type}</span>
      <h1 className={styles.item__title}>{title}</h1>
      <div className={styles.item__bottom}>
        {time && <p className={styles.item__text}>{time} mins</p>}
      </div>
    </div>
  )
}