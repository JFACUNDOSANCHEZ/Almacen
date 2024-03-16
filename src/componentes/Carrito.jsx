import React from 'react';

const Carrito = ({ cartItems, removeFromCart }) => {
  return (
    <div className="p-4 bg-gray-200 mt-4">
      <h2 className="text-xl font-semibold mb-4">Carrito de Compras</h2>
      {cartItems?.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
         {cartItems?.map((item, index) => (
  <li key={item.title} className="flex items-center justify-between border-b border-gray-300 py-2">
    <div className="flex items-center">
      <img src={item.img} alt={item.title} className="w-10 h-10 mr-4" />
      <span>{item.title}</span>
    </div>
    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">Quitar</button>
  </li>
))}
        </ul>
      )}
    </div>
  );
};

export default Carrito;