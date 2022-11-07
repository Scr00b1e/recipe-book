import React from 'react'

type ItemsProps = {
  title: string
  time: number
  id: string
  img: string
  type: string
}

const BrItem: React.FC<ItemsProps> = ({ title, time, type, img }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default BrItem