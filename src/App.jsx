import { Routes, Route } from 'react-router-dom'
import { Header } from '@/components'
import { ScreenShow, Cart } from '@/pages'

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<ScreenShow />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    )
}

export default App
