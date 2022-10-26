import React from 'react'
import { Item } from '../../component/item'
import styles from './breakfast.module.scss'
import BreakfastItem from './[id]'

export async function getStaticProps() {
    try {
        const responce = await fetch('http://localhost:3000/api/brPage')
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
                {
                    item &&
                    item.map((obj) => (
                        <Item {...obj} key={obj.id}/>
                    ))
                }
            </div>
        </div>
      )
}

export default Breakfast