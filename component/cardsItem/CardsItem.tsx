import React from 'react'

const BrItem = ({ item }) => {
  return (
    <div>
      {
        Object.values(item).map((obj: any) => (
          <>
            <h1>{obj.title}</h1>
            <img src={obj.img} alt="" />
          </>
        ))
      }
    </div>
  )
}

export default BrItem