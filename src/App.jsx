import React from 'react'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>
    
    </>
  )
}

export default App
