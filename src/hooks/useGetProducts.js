import React from 'react'
import { getAllProducts } from '@/services'

export function useGetProducts(limit) {
    const [isLoading, setIsLoading] = React.useState(false)
    const [err, setError] = React.useState()
    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        setIsLoading(true)
        getAllProducts(limit)
            .then((res) => {
                setData(res)
            })
            .catch((err) => {
                console.error(err)
                setError(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [limit])

    return { data, err, isLoading }
}
