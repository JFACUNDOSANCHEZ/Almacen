import React from 'react'

const Card=({producto})=> {
  return (
<div className="flex flex-col md:flex-row shadow-md ">
   <div className="flex flex-col md:flex-row h-full">
          <div className="flex-1 p-4 rounded-lg">
            <h3 className=""> {producto.title}</h3>
            <h3 className="text-lg font-semibold text-green-700 mb-4">$ {producto.precio}</h3>
          </div>
          <div className="flex-none flex justify-center  h-40 items-center mt-4 md:mt-0 md:w-24">
            <img src={producto.img} alt="" className="w-32 sm:w-24" />
          </div>
        </div>
        <button className="flex-none bg-blue-500 text-white text-2xl px-4 py-2 rounded-md hover:bg-blue-600">+</button>
</div>

  )
}

export default Card
