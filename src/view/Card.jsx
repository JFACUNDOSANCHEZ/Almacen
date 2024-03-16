import React from 'react';

const Card = ({ producto, addToCart }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="flex flex-col shadow-md md:flex-row w-64">
        <div className="flex-1 p-4 rounded-lg">
          <div className="flex-none flex justify-center h-25 items-center mt-4 md:mt-0 md:w-24">
            <img src={producto.img} alt="" className="w-32 md:w-24" />
          </div>
          <h3 > {producto.title}</h3>
          <h3 className="text-lg font-semibold text-green-700 mb-4">$ {producto.precio}</h3>
          <button onClick={() => addToCart(producto)} className="bg-blue-500 text-white text-lg px-3 py-1 rounded-md hover:bg-blue-600">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;