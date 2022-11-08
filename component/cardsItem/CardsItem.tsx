import React from 'react'

type ItemProps = {
  item: ObjProps[]
}

interface ObjProps {
  title: string
  time: number
  id: string
  img: string
  type: string
}

const BrItem: React.FC<ItemProps> = ({ item }) => {
  return (
    <div>
      {}
    </div>
  )
}

export default BrItem