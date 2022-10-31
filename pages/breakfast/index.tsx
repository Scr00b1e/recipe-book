import { GetStaticProps } from 'next'
import React from 'react'
import { Item, RecipesProps } from '../../component/item'
import styles from './breakfast.module.scss'

export const  getStaticProps: GetStaticProps = async () => {
    try {
        const responce = await fetch(`${process.env.API_HOST}/brPage`)
        const data = await responce.json()

        if(!data) {
            return {
                notFound: true,
            }
        }

        return {
            props: {item: data}
        }
    } catch {
        return {
            props: {item: null}
        }
    }
}

const Breakfast = ({ item }) => {
    
    // breafast === br

    return (
        <div className={styles.br}>
            <div className="container">
                <h1 className={styles.br__title}>Breakfast</h1>
                <div className={styles.br__content}>
                    {
                        item &&
                        item.map((obj: RecipesProps) => (
                            <Item {...obj} key={obj.id}/>
                        ))
                    }
                </div>
            </div>
        </div>
      )
}

export default Breakfast