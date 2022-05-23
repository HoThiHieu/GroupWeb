import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home'


function AllRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />

            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    )
}
export default AllRoutes
