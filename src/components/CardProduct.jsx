import React from 'react'
import { formatWithDecimal } from '@ftools-suit/utils/currency'
import StarIcon from '@/assets/estrella.svg'

const CardProduct = (props) => {
    const { name, price, stars, image, discount, onPress } = props

    return (
        <div className="cursor-pointer hover:shadow-2xl" style={{ height: '250px', width: '250px' }} onClick={onPress}>
            <div className="bg-white p-4 shadow-lg rounded-sm" style={{ height: '350px', width: '300px' }}>
                <img src={image} alt="Product image" style={{ height: '280px' }} />
                <div className="flex items-center justify-between pt-4">
                    <div className="flex">
                        {Array.from({ length: Math.round(stars) }).map((_, index) => (
                            <React.Fragment key={index}>
                                <img src={StarIcon} width={15} />
                            </React.Fragment>
                        ))}
                    </div>
                    {discount && <div className="bg-black rounded-full w-8 p-1 text-white text-xs text-center">{discount}%</div>}
                </div>
            </div>
            <div className="mt-6">
                <p className="text-sm truncate">{name}</p>
                <span className="font-bold text-sm mt-3 block">{formatWithDecimal(price, 'ES')} €</span>
            </div>
        </div>
    )
}

export default CardProduct
