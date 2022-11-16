import React from 'react'

export type FavProps = {
  id: string
  title: string
  type: string
  img: string
  time: number
}

const FavItem: React.FC<FavProps> = ({ id, title, type, img, time }) => {
  return (
    <div>
      <img src={img} alt="" />
    </div>
  )
}

export default FavItem