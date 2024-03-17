import React from 'react';

const Card = ({ producto, addToCart }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
    <div className="flex flex-col shadow-md md:flex-row w-64">
      <div className="flex-1 p-4 rounded-lg h-full">
        <div className="flex justify-end items-center">
        <button onClick={() => addToCart(producto)} className="bg-black text-white text-lg px-3 py-1 rounded-full hover:bg-green-600">
          +
        </button>
      </div>
      <div className="flex-none flex justify-center items-center mx-auto h-25 mt-4 md:mt-0 md:w-24">
          <img src={producto.img} alt="" className="w-32 h-32  md:w-24 md:h-24 object-contain" /> {/* Establece un tamaño fijo para la imagen */}
        </div>
        <h3 className="h-8 overflow-hidden">{producto.title}</h3> {/* Establece una altura fija para el título */}
        <h3 className="text-lg font-semibold text-green-700 mb-3">$ {producto.precio}</h3>
      </div>
    </div>
  </div>
  );
};

export default Card;