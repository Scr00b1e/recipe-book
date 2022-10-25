import React from 'react'
import { Item } from '../../component/item'
import styles from './breakfast.module.scss'
import BreakfastItem from './[id]'

type BreakfastData = {
    id: string
    img: string
    title: string
    type: string
    time: number
  }

export const getStaticProps = async () => {
    try {
        const responce = await fetch('http://localhost/api/brPage')
        const data = await responce.json()

        if(!data) {
            return {
                notFound: true
            }
        }

        return {
            props: {data}
        }
    } catch {
        return {
            props: {data: null}
        }
    }
}

const Breakfast = ({ data }) => {
    // breafast === br

    return (
        <div className={styles.br}>
            <div className="container">
                {
                    data &&
                    data.map((obj: BreakfastData) => (
                        <Item {...obj} key={obj.id}/>
                    ))
                }
            </div>
        </div>
      )
}

export default Breakfast