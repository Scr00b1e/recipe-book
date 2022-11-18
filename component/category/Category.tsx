import React from 'react'
import styles from './category.module.scss'

const Category: React.FC = () => {
    const categories = ['20 - 30 mins', '40 - 60 mins']
    const [activeId, setActiveId] = React.useState(0)

    return (
        <div className={styles.category}>
            {
                categories.map((value, i) => (
                    <div
                        className={activeId === i ? 'categories__active' : 'categories__item'}
                        key={i}
                        onClick={() => setActiveId(i)}
                    >
                        {value}
                    </div>
                ))
            }
        </div>
    )
}

export default Category