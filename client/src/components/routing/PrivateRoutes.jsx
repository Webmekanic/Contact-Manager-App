import React, { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import AuthContext from "../../context/auth/authContext"

const PrivateRoutes = () => {
  const authContext = useContext(AuthContext)
  const { isAuthenticated, loading } = authContext
  return !isAuthenticated && !loading ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
