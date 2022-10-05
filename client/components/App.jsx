import React from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'

import Home from './Home'
import Foods from './Foods'
import NavBar from './Nav Bar'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Foods />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
