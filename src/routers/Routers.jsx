import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/pages/Home'
import Cart from '../components/pages/Cart'
import Shop from '../components/pages/Shop'
import ProductDetails from '../components/pages/ProductDetails'
import Login from '../components/pages/Login'
import Signup from '../components/pages/Signup'
import Checkout from '../components/pages/Checkout'
import NoPage from '../components/NoPage/NoPage'
import ProtectedRoute from './ProtectedRoute'
import AddProduct from '../admin/AddProduct'
import AllProducts from '../admin/AllProducts'
import Dashboard from '../admin/Dashboard'
import Users from '../admin/Users'

const Routers = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Navigate to="home" />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/all-products" element={<AllProducts />} />
          <Route path="/dashboard/add-product" element={<AddProduct />} />
        </Route>

        {/* <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        /> */}
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </div>
  )
}

export default Routers
