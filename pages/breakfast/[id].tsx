import React from 'react'
import { Item } from '../../component/item'

type BreakfastData = {
  id: string
  img: string
  title: string
  type: string
  time: number
}

interface BreakfastType {
  data: BreakfastData[]
}

const BreakfastItem: React.FC<BreakfastType> = ({data}) => {
  return (
    <>
      {
        data.map((obj) => {
          <Item {...obj} key={obj.id}/>
        })
      }
    </>
  )
}

export default BreakfastItem
