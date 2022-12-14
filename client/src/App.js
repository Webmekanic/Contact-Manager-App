import React, { Fragment } from "react"
import "./App.css"
import Navbar from "./components/layouts/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import ContactState from "./context/contact/ContactState"
import AuthState from "./context/auth/AuthState"
import AlertState from "./context/alert/AlertState"
import Alerts from "./components/layouts/Alerts"
import setAuthToken from "./utils/setAuthToken"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import PrivateRoutes from "./components/routing/PrivateRoutes"

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Routes>
                  <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<Home />} />
                  </Route>
                  <Route path="/about" element={<About />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  )
}

export default App
