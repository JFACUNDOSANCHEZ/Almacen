import React from 'react'
import Nav from '../componentes/Nav'
import productos from '../data'
import Card from './Card'
import SearchBar from '../componentes/SearchBar'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import Carousel from '../componentes/Carrusel'
import CarouselMenu from '../componentes/CarruselMenu'
import Carrito from '../componentes/Carrito'
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]); 
  const filteredProductos = productos.filter(producto =>
    producto.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const addToCart = (product) => {
    setCartItems([...cartItems, product]); // Agrega el producto al carrito
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId)); // Elimina el producto del carrito
  };


  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
console.log(productos);
  return (
    <div className='w-full justify-center mx-auto overflow-hidden max-w-screen-xl'>
  <div > 
  <Nav></Nav>

    <Carousel></Carousel>
   </div>
    
      <CarouselMenu></CarouselMenu>
      <div className='flex justify-center relative'>
    <SearchBar searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} />

    <Link to={''}>
    <button className="relative">
      {!cartItems.length? '' :
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
            {cartItems.length}
        </span>
        }
        <img src="https://cdn-icons-png.flaticon.com/512/3081/3081900.png" className='w-12 h-25' alt="" />
    </button>
        </Link>
</div>
      <br />
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
filteredProductos.length === 0 ? <p className=' justify-center text-center font-bold'>No encontrado</p>
:

        filteredProductos.map(p => {
          return (
            <div className='p-6 w-full md:w-[95%]' key={p.id}>
              <Card producto={p} addToCart={addToCart} ></Card>
            </div>
          );
        })
      }
      </div>
      <Carrito cartItems={cartItems} removeFromCart={removeFromCart} /> 
    </div>
  )
}
export default Home
