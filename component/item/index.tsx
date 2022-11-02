import Link from 'next/link'
import React from 'react'
import styles from './item.module.scss'

export type RecipesProps = {
  id: string
  img: string
  title: string
  time: number
  type: string
}

export const Item: React.FC<RecipesProps> = ({ id, img, title, time, type }) => {
  return (
    <Link href={`/breakfast/${id}`}>
      <div className={styles.item}>
        <div className={styles.item__image}>
        <img src={img} alt="" className={styles.item__img}/>
        <img src="../favorite.svg" alt="" className={styles.item__heart}/>
        </div>
        <span className={styles.item__type}>{type}</span>
        <h1 className={styles.item__title}>{title}</h1>
        <div className={styles.item__bottom}>
            { time && <p className={styles.item__text}>{time} mins</p> }
        </div>
      </div>
    </Link>
  )
}