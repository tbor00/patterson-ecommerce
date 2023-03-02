import React from 'react'
import { toast } from 'react-toastify'
import { formatWithDecimal } from '@ftools-suit/utils/currency'
import { useCartStore } from '@/store'

import DeleteIcon from '@/assets/delete.svg'

const DISCOUNT_CODES = {
    DTO10: 10,
    DTO50: 50
}

const DiscountCart = () => {
    const { setDiscount } = useCartStore()
    const [discountCode, setCodeDiscount] = React.useState('')

    const applyDiscount = React.useCallback(() => {
        if (!Object.keys(DISCOUNT_CODES).includes(discountCode)) {
            toast.error('Oops, código de descuento invalido')
            return
        }

        setDiscount(DISCOUNT_CODES[discountCode])
        toast.success(`Descuento aplicado! ${DISCOUNT_CODES[discountCode]}%`)
    }, [discountCode])

    return (
        <div className="flex items-center gap-2 justify-center mt-8">
            <span>Código de descuento</span>
            <input value={discountCode} className="border p-2 w-44" type="text" onChange={(e) => setCodeDiscount(e.target.value)} />
            <button className="bg-gray-900 text-white w-full p-2" onClick={applyDiscount}>
                Aplicar
            </button>
        </div>
    )
}

const CheckoutCart = () => {
    const { countProducts, countPriceProducts } = useCartStore()
    return (
        <div className="border" style={{ height: '130px', width: '100%' }}>
            <div className="py-4 px-4 border-b">
                <div className="flex items-center justify-between">
                    <span>
                        {countProducts()} {countProducts() > 10 ? 'Articulos' : 'Articulo'}
                    </span>
                    <span>{formatWithDecimal(countPriceProducts(), 'ES')}</span>
                </div>
            </div>
            <div className="px-2 py-4">
                <button className="bg-gray-900 text-white w-full p-2" onClick={() => alert('Finalizaste la compra!')}>
                    Finalizar compra
                </button>
            </div>
        </div>
    )
}

const ProductsCart = () => {
    const { products, deleteProductById } = useCartStore()

    return (
        <div className="border shadow-lg rounded-md" style={{ minHeight: '300px', width: '100%' }}>
            <div className="border-b py-4 pl-4 mb-6">
                <h1 className="text-2xl font-bold">CARRITO</h1>
            </div>
            <div className="overflow">
                {products.length === 0 && (
                    <div className="flex items-center justify-center text-center text-2xl">Oops, no tienes ningún producto en el carrito</div>
                )}
                {products?.map((product) => {
                    return (
                        <div key={product.id} className="grid grid-cols-4 items-center justify-center gap-24 pl-14 mb-4">
                            <img src={product.image} alt="Product image" width={40} height={40} />
                            <p className="truncate">{product.title}</p>
                            <p className="">{formatWithDecimal(product.price, 'ES')} €</p>
                            <img src={DeleteIcon} className="cursor-pointer" width={20} onClick={() => deleteProductById(product.id)} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const Cart = () => {
    return (
        <div>
            <div className="block h-4 bg-gray-100 mb-8"></div>
            <div className="container mx-auto flex gap-8">
                <ProductsCart />
                <div>
                    <CheckoutCart />
                    <DiscountCart />
                </div>
            </div>
        </div>
    )
}

export default Cart
