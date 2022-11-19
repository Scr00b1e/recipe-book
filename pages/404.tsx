import { useRouter } from 'next/router'
import React from 'react'

const Error: React.FC = () => {
    const router = useRouter()

    React.useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [router])

    return (
        <div className='error'>
            <h1>404</h1>
            <p>Sorry we do not have page like that</p>
        </div>
    )
}

export default Error