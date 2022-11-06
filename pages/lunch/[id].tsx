import { GetServerSideProps } from 'next'
import React from 'react'
import CardsItem from '../../component/cardsItem/CardsItem'
import styles from '../../component/pagesItem/PagesItem.module.scss'

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  
    const res = await fetch(`${process.env.API_HOST}/lunch/${params.id}`)
    const data = await res.json()

    return {
      props: {item: data}
    }
}

type ItemProps = {
  item: any
}

const LunchItem: React.FC<ItemProps> = ({item}) => {
  return (
    <div className={styles.item}>
      <div className='container'>
       {
        <CardsItem item={item}/>
       }
      </div>
    </div>
  )
}

export default LunchItem
