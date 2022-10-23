import React from 'react'
import styles from './item.module.scss'

export type RecipesProps = {
  id: string
  img: string
  title: string
}

export const Item: React.FC<RecipesProps> = ({ img, title }) => {
  return (
    <div className={styles.item}>
        <img src={img} alt="" className={styles.item__img}/>
        <span className={styles.item__type}>item type</span>
        <h1 className={styles.item__title}>{title}</h1>
        <div className={styles.item__bottom}>
            <p className={styles.item__text}>item done</p>
        </div>
    </div>
  )
}