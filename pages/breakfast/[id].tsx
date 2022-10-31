import { GetServerSideProps } from 'next'
import React from 'react'
import BrItem from '../../component/brItem/BrItem'
import styles from './breakfast.module.scss'

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  
    const res = await fetch(`${process.env.API_HOST}/brPage/${params.id}.json`)
    const item = await res.json()

    return {
      props: {item}
    }
}

type ItemProps = {
  item: {
    map(arg0: (obj: any) => void): React.ReactNode
    title: string
    time: number
    id: string
    img: string
  }
}

const BreakfastItem: React.FC<ItemProps> = ({item}) => {
  // const things = item.map((obj) => (
  //   {...obj}
  // ))
  
  return (
    <div className={styles.br}>
      <div className='container'>
        {
          item &&
          item.map((obj) => {
            <BrItem {...obj} key={obj.id}/>
          })
        }
      </div>
    </div>
  )
}

export default BreakfastItem
