import React from 'react'
import { toast } from 'react-toastify'
import { Breadcrumbs, CardProduct } from '@/components'
import { useGetProducts } from '@/hooks/useGetProducts'
import { useCartStore } from '@/store'

const optBreadcrumbs = [
    {
        id: 1,
        name: 'Todos Los Productos'
    },
    {
        id: 2,
        name: 'Cocina'
    },
    {
        id: 3,
        name: 'Productos Destacados'
    }
]

const toastPosition = {
    position: toast.POSITION.BOTTOM_CENTER
}

const ScreenShow = () => {
    const { products, addProductToCart } = useCartStore()
    const { data, err, isLoading } = useGetProducts(5)

    const onPressHandler = React.useCallback(
        (product) => {
            const foundProduct = products.find((p) => p.id === product.id)
            if (foundProduct) {
                toast.error('Oops, este producto ya se encuentra en el carrito', toastPosition)
                return
            }

            addProductToCart(product)
            toast.success('Agregaste un producto al carrito!', toastPosition)
        },
        [products]
    )

    if (err) return null
    if (isLoading) return <>Loading products...</>

    return (
        <div className="bg-gray-100 h-screen">
            <div className="py-10 container mx-auto">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold font-weight block">Productos Destacados</h1>
                    <Breadcrumbs options={optBreadcrumbs} />
                </div>
                <div className="mt-12 flex items-center gap-16">
                    {data?.map((product) => (
                        <CardProduct
                            onPress={() => onPressHandler(product)}
                            key={product.id}
                            name={product.title}
                            price={product.price}
                            stars={product.rating?.rate}
                            image={product.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ScreenShow
