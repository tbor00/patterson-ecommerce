import { useNavigate } from 'react-router-dom'
import { formatWithDecimal } from '@ftools-suit/utils/currency'
import { useCartStore } from '@/store'

/* Assets */
import CartLogo from '@/assets/carrito.svg'
import PattersonLogo from '@/assets/patterson-agency-logo.png'

const Header = () => {
    const navigate = useNavigate()
    const { countProducts, countPriceProducts } = useCartStore()

    return (
        <header className="p-6 bg-white">
            <div className="container mx-auto flex items-center justify-between">
                <img className="cursor-pointer" src={PattersonLogo} alt="Patterson logo" width={300} onClick={() => navigate('/')} />
                <div className="flex items-center gap-8">
                    <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
                        <div className="absolute -top-3 -right-2 font-thin rounded-full bg-black text-white w-4 h-4 flex items-center justify-center text-xs">
                            {countProducts()}
                        </div>
                        <img src={CartLogo} alt="Cart logo" width={25} />
                    </div>
                    <div className="-mt-3">
                        <small className="text-gray-500 text-xs">{formatWithDecimal(countPriceProducts(), 'ES')} €</small>
                        <span className="text-sm block">Mi Carrito</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
