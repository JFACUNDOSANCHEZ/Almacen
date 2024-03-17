import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './view/Home'
import 'tailwindcss/tailwind.css'
import Carrito from './componentes/Carrito'
import Ubicacion from './componentes/Ubicacion'


const App=()=> {
  return (
    <div>
      <Routes>

<Route path='/carrito' element={<Carrito />}></Route>
<Route path='/' element={<Home />}></Route>
<Route path='/ubi' element={<Ubicacion />}></Route>

      </Routes>
    </div>
  )
}

export default App
