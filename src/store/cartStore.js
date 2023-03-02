import { create } from 'zustand'

const useCartStore = create((set, get) => ({
    products: [],
    discount: 0,
    setDiscount: (newDiscount) => {
        if (get().discount !== 0) set({ discount: 0 })
        set({ discount: newDiscount })
    },
    countProducts: () => {
        return get()?.products.length
    },
    countPriceProducts: () => {
        const getProductsFromStore = get()?.products
        const total = getProductsFromStore?.reduce((prev, current) => {
            return prev + current?.price
        }, 0)

        const discountFinal = (total * get().discount) / 100
        return total - discountFinal
    },
    addProductToCart: (product) => {
        const newProducts = [...get()?.products, product]
        set({ products: newProducts })
    },
    deleteProductById: (productId) => {
        const copyProducts = [...get()?.products]
        const foundIndexProduct = copyProducts.findIndex((product) => product.id === productId)
        if (foundIndexProduct !== -1) copyProducts.splice(foundIndexProduct, 1)
        set({ products: copyProducts })
    }
}))

export default useCartStore
