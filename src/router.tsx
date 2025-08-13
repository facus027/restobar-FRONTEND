import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'
import Home from './views/Home'
import CartaLayout from './layouts/CartaLayout'
import Carta from './views/Carta'

export default function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<HomeLayout />}>
                    <Route path='/' element={<Home />} index />
                </Route>

                <Route element={<CartaLayout />}>
                    <Route path='/carta' element={<Carta />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
