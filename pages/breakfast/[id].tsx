import React from 'react'
import styles from './breakfast.module.scss'

export async function getServerSideProps(context) {
  try {
      const { id } = context.params
      const responce = await fetch(`${process.env.API_HOST}/brPage/${id}`)
      const data = await responce.json()

      if(!data) {
          return {
              notFound: true,
          }
      }

      return {
          props: {item: data}
      }
  } catch {
      return {
          props: {item: null}
      }
  }
}

type ItemProps = {
  title: string
  time: number
  id: string
  img: string
}

const BreakfastItem = ({item}) => {
  // const things = item.map((obj) => (
  //   {...obj}
  // ))
  
  return (
    <div className={styles.br}>
      <div className='container'>
        {item.title}
      </div>
    </div>
  )
}

export default BreakfastItem
