import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import userAuth from '../custom-hooks/userAuth'

// const ProtectedRoute = ({ children }) => {
const ProtectedRoute = () => {
  const { currentUser } = userAuth()
  // return currentUser ? children : <Navigate to="/login" />
  return currentUser ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
