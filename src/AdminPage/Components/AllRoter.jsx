import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Deshbord from '../Pages/Deshbord'
import Order from '../Pages/Order'
import Products from '../Pages/Products'
import User from '../Pages/User'
export default function AllRoter() {
    return (
        <Routes>
            <Route path='/Admit-order' element={<Order />} />
            <Route path='/User-Profile' element={<User />} />
            <Route path='/products' element={<Products />} />
            <Route path='/deshbord' element={<Deshbord />} />
        </Routes>
    )
}
