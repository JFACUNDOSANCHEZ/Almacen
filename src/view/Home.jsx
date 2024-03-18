import React from 'react'
import Nav from '../componentes/Nav'
import productos from '../data'
import Card from './Card'
import SearchBar from '../componentes/SearchBar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../componentes/Carrusel'
import CarouselMenu from '../componentes/CarruselMenu'
import Carrito from '../componentes/Carrito'
import NotFound from '../componentes/NotFound'
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
 

  const categoria1 = productos.filter(p => { return p.categoria == 1 })
  const categoria2 = productos.filter(p => { return p.categoria == 2 })
  const categoria3 = productos.filter(p => { return p.categoria == 3 })

  console.log('aca esta la cate1' + categoria1);
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
    <div className=' w-[95%] justify-center mx-auto overflow-hidden max-w-screen-xl'>
      <div >
        <Nav></Nav>

        <Carousel></Carousel>
      </div>

      <div className='flex justify-center w-[98%] relative'>
        <SearchBar searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} />
        <div className=''>

          <Link to={''}>
            <button className="relative">
              {!cartItems.length ? '' :
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartItems.length}
                </span>
              }
              <img src="https://cdn-icons-png.flaticon.com/512/3081/3081900.png" className='w-12 h-25' alt="" />
            </button>
          </Link>
        </div>
      </div>
      <br />
      <div className=' w-screen'>
      </div>
      <div className='w-screen'>

<br />
       <h2 className=' font-bold text-2xl'>Bebidas</h2>
        <div className="flex overflow-x-auto">
          {categoria1.map(p => (
            <div className='p-6 w-full md:w-[95%]' key={p.id}>
              <Card producto={p} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>
      
      
      <br />
      <div className='w-screen'>
      <h2 className=' font-bold text-2xl'>Lacteos</h2>
        <div className="flex overflow-x-auto">
          {categoria2.map(p => (
            <div className='p-6 w-full md:w-[95%]' key={p.id}>
              <Card producto={p} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>

<br />

      <div className='w-screen'>
      <h2 className=' font-bold text-2xl'>Cigarrillos</h2>
        <div className="flex overflow-x-auto">
          {categoria3.map(p => (
            <div className='p-6 w-full md:w-[95%]' key={p.id}>
              <Card producto={p} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>
      <Carrito cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  )
}
export default Home
