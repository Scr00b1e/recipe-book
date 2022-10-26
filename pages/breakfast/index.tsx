import Link from 'next/link'
import React from 'react'
import { Item } from '../../component/item'
import styles from './breakfast.module.scss'

export async function getStaticProps() {
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
                        item.map((obj) => (
                            <Link href={`/breakfast/${obj.id}`}>
                                <Item {...obj} key={obj.id}/>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
      )
}

export default Breakfast