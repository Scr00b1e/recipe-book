import React from 'react'

type BrItem = {
    title: string
    img: string
    time: number
}

const BrItem: React.FC<BrItem> = ({title, img, time}) => {
  return (
    <div>
        {title}
    </div>
  )
}

export default BrItem