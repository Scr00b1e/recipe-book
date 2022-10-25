import React from 'react'
import styles from './item.module.scss'

export type RecipesProps = {
  id: string
  img: string
  title: string
  time: number
  type: string
}

export const Item: React.FC<RecipesProps> = ({ img, title, time, type }) => {
  
  return (
    <div className={styles.item}>
        <img src={img} alt="" className={styles.item__img}/>
        <span className={styles.item__type}>{type}</span>
        <h1 className={styles.item__title}>{title}</h1>
        <div className={styles.item__bottom}>
            { time && <p className={styles.item__text}>{time} mins</p> }
        </div>
    </div>
  )
}