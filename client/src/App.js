import React, { Fragment } from "react"
import "./App.css"
import Navbar from "./components/layouts/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ContactState from "./context/contact/ContactState"
import AuthState from "./context/auth/AuthState"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  )
}

export default App
