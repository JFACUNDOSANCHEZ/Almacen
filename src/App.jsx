import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './view/Home'
import 'tailwindcss/tailwind.css'


const App=()=> {
  return (
    <div>
      <Routes>

<Route path='/' element={<Home />}></Route>

      </Routes>
    </div>
  )
}

export default App
