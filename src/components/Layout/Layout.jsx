import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../../routers/Routers'
import { useLocation } from 'react-router-dom'
import AdminNavbar from '../../admin/AdminNavbar'
const Layout = () => {
  const loaction = useLocation()
  return (
    <>
      {location.pathname.startsWith('/dashboard') ? (
        <AdminNavbar />
      ) : (
        <Header />
      )}

      <div>
        <Routers />
      </div>
      <Footer />
    </>
  )
}

export default Layout
