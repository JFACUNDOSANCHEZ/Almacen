import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuNav() {
  return (
   
            <div>
  <input type="checkbox" id="menu" className="peer hidden" />
  <label htmlFor="menu">
    <img className="w-8 z-50 md:translate-x-0 md:hidden " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymaqkaL2zGrzlQaT0Bvymlz2KTarKW7yOYILwJ2GwMq4dZjmOaPeeywCWF2YfZlaSEXA&usqp=CAU" alt="" />
  </label>
  <div className="fixed inset-0 z-50 bg-gradient-to-b from-white/70 to-black/70 translate-x-full md:translate-x-0  md:duration-500 md:static md:bg-none peer-checked:translate-x-0">
    <p className='flex  justify-center border bg-white md:hidden text-5xl' onClick={() => document.getElementById('menu').checked = false}> <img className='w-14 p-4' src="https://cdn-icons-png.flaticon.com/512/439/439220.png" alt="" /> </p>
    <ul className="absolute p-10 w-[80%] rounded-xl mx-auto inset-x-0 bg-white text-center top-24 grid gap-6 font-bold md:static md:translate-x-0 md:bg-transparent md:w-max md:grid-flow-col md:p-0 ">
      <li>
        <Link to={'/ubi'}>
      Ubicacion
        </Link>
        </li>
      <li><a href="#">Contactanos</a></li>
      
      <li><a href="#">Nosotros</a></li>
    </ul>
  </div>
</div>
   
  )
}
