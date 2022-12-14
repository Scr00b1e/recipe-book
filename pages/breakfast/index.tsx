import { GetStaticProps } from 'next'
import React from 'react'
import PagesItem from '../../component/pagesItem/PagesItem'

export const  getStaticProps: GetStaticProps = async () => {
    try {
        const responce = await fetch(`${process.env.API_HOST}/brPage`)
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

const Breakfast = ({ item }) => {
    return (
        <PagesItem
            pageTitle={'Breakfast'}
            pageUrl={'/breakfast'} item={item}
        />
      )
}

export default Breakfast