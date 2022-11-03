import React from 'react'
import { Item, RecipesProps } from '../../component/item'
import styles from './pagesItem.module.scss'

type PageProps = {
    pageTitle: string
    pageUrl: string
    item: any
}

const Lunch: React.FC<PageProps> = ({ item, pageTitle, pageUrl }) => {

    return (
        <div className={styles.br}>
            <div className="container">
                <h1 className={styles.br__title}>{pageTitle}</h1>
                <div className={styles.br__content}>
                    {
                        item &&
                        item.map((obj: RecipesProps) => (
                            <Item {...obj} key={obj.id} apiUrl={`${pageUrl}`}/>
                        ))
                    }
                </div>
            </div>
        </div>
      )
}

export default Lunch