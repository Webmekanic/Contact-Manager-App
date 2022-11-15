import React, { Fragment } from "react"
import "./App.css"
import Navbar from "./components/layouts/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  )
}

export default App
