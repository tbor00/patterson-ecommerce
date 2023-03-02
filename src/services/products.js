import { get } from '@ftools-suit/network/fetch'

export async function getAllProducts(limitProducts = 4) {
    return get(
        'https://fakestoreapi.com/products?' +
            new URLSearchParams({
                limit: limitProducts
            })
    ).then(async (res) => await res.json())
}
