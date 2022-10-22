import React from 'react'
import styles from './item.module.scss'

type RecipesProps = {
  recipes: {
    img: string
    title: string
  }
}

export const Item: React.FC<RecipesProps> = ({recipes}) => {
  return (
    <div className={styles.item}>
        <img src="https://www.simplyrecipes.com/thmb/HBtBhymlFjjKoO8JGqs5bu5NaQU=/390x260/filters:max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Meatball-Parm-Sliders-LEAD-5-837a559ccfab4a8ba861db245375a5f8.jpg" alt="" className={styles.item__img}/>
        <span className={styles.item__type}>item type</span>
        <h1 className={styles.item__title}>Hawaiian Roll Sliders with Meat Sauce and Parm</h1>
        <div className={styles.item__bottom}>
            <p className={styles.item__text}>item done</p>
        </div>
    </div>
  )
}