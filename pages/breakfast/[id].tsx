import React from 'react'
import styles from './breakfast.module.scss'

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_HOST}/brPage`)
  const data = await res.json()

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() }
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
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
  item: {
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
        {item.title}
      </div>
    </div>
  )
}

export default BreakfastItem
