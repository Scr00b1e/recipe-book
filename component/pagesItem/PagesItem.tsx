import React from 'react'
import { Item, RecipesProps } from '../../component/item'
import Category from '../category/Category'
import styles from './pagesItem.module.scss'

type PageProps = {
    pageTitle: string
    pageUrl: string
    item: any
}

const Lunch: React.FC<PageProps> = ({ item, pageTitle, pageUrl }) => {

    return (
        <div className={styles.item}>
            <div className="container">
                <h1 className={styles.item__title}>{pageTitle}</h1>
                {/* <Category /> */}
                <div className={styles.item__content}>
                    {
                        item &&
                        item.map((obj: RecipesProps) => (
                            <Item {...obj} key={obj.id} apiUrl={`${pageUrl}`} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Lunch