import { GetStaticProps } from 'next'
import React from 'react'
import PagesItem from '../../component/pagesItem/PagesItem'

export const getStaticProps: GetStaticProps = async () => {
    try {
        const responce = await fetch(`${process.env.API_HOST}/lunch`)
        const data = await responce.json()

        if (!data) {
            return {
                notFound: true,
            }
        }

        return {
            props: { item: data }
        }
    } catch {
        return {
            props: { item: null }
        }
    }
}

const Lunch = ({ item }) => {

    return (
        <PagesItem
            pageTitle={'Lunch'}
            pageUrl={'/lunch'} item={item} />
    )
}

export default Lunch