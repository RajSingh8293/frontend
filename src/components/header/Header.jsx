import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Badge from 'react-bootstrap/Badge'
import '../header/Header.css'
import { FaCartPlus } from 'react-icons/fa'
import userImg from '../../assets/user_profile.png'

import { Link, NavLink, useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import userAuth from '../../custom-hooks/userAuth'
import { useRef, useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { toast } from 'react-toastify'

// nav links array
// const nav_links = [
//   {
//     path: '/',
//     display: 'Home',
//   },

//   {
//     path: '/shop',
//     display: 'Shop',
//   },
//   {
//     path: '/cart',
//     display: 'Cart',
//   },
// ]

function Header() {
  const navigate = useNavigate()
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const { currentUser } = userAuth()
  const toggleUserRef = useRef(null)

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success('Logged out')
        navigate('/')
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }

  const toggleUserDetails = () => {
    return toggleUserRef.current.classList.toggle('profile_pageSow')
  }
  const navigateToCart = () => {
    navigate('/cart')
  }
  return (
    <Navbar expand="lg" className="bg-dark navigation p-3">
      <Container className="fixed">
        <NavLink to="/">React-Bootstrap</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto d-flex gap-4">
            {/* {nav_links.map((item) => (
              <NavLink className="nav_links bg-blue-400  active" to={item.path}>
                {item.display}
              </NavLink>
            ))} */}
            <NavLink className="nav_links bg-blue-400  active" to="/">
              Home
            </NavLink>
            <NavLink className="nav_links" to="/shop">
              Shop
            </NavLink>
            <NavLink className="nav_links" to="/cart">
              Cart
            </NavLink>

            {/* <NavLink className="nav_links" to="/login">
              Login
            </NavLink> */}
          </Nav>
          <div className="right-nav d-flex gap-4 align-items-center">
            <div className="navigateToCart" onClick={navigateToCart}>
              <FaCartPlus className="cart" />
              <Badge bg="secondary" className="cart_badge">
                {totalQuantity}
              </Badge>
            </div>
            <div className="profile" onClick={toggleUserDetails}>
              <img
                className="profile_img"
                src={currentUser ? currentUser.photoURL : userImg}
                alt="user"
              />

              <div className="profile_page" ref={toggleUserRef}>
                {currentUser ? (
                  <div className="user_details">
                    <span className="nav_links " onClick={logout}>
                      Logout
                    </span>
                  </div>
                ) : (
                  <div className="user_details">
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/dashboard">Dashboard</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
