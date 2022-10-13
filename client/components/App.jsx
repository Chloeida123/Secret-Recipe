import React from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'

import Home from './Home'
import Foods from './Foods'
import NavBar from './Nav Bar'
import Food from './Food'
import AddForm from './AddForm'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recipes" element={<Foods/>} />
          <Route path="api/v1/foods/:id"element={<Food/>}/>
          <Route path="/addRecipe" element={<AddForm/>}/>
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
