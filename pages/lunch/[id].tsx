import { GetServerSideProps } from 'next'
import React from 'react'
import BrItem from '../../component/brItem/BrItem'
import styles from './breakfast.module.scss'

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  
    const res = await fetch(`${process.env.API_HOST}/lunch/${params.id}.json`)
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
    <div className={styles.br}>
      <div className='container'>
        <BrItem item={item}/>
      </div>
    </div>
  )
}

export default LunchItem
