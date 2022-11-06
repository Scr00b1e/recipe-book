import React from 'react'

type ItemsProps = {
  item: any
}

const BrItem: React.FC<ItemsProps> = ({item}) => {
  return (
    <div>
      {
        item.map((obj) => (
          <h1>{obj.title}</h1>
        ))
      }
    </div>
  )
}

export default BrItem