import React from 'react'
import Nav from '../componentes/Nav'
import productos from '../data'
import Card from './Card'
import SearchBar from '../componentes/SearchBar'
import { useState } from 'react'
import Button from '../componentes/Button'
import Carousel from '../componentes/Carrusel'
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredProductos = productos.filter(producto =>
    producto.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Manejador de eventos para actualizar el término de búsqueda
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
      <div className='flex justify-center '>
        <SearchBar searchTerm={searchTerm}  onSearchTermChange={handleSearchTermChange} ></SearchBar>
      </div>
      <div className="flex justify-center space-x-4 p-5">
      <Button text="Limpieza" onClick={() => handleFilterClick('Limpieza')} className="flex-1" />
        <Button text="Bebidas" onClick={() => handleFilterClick('Bebidas')} className="flex-1" />
        <Button text="Lácteos" onClick={() => handleFilterClick('Lácteos')} className="flex-1" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProductos.map(p => {
          return (
            <div className='p-6 w-full md:w-[95%]' key={p.id}>
              <Card producto={p}></Card>
            </div>
          );
        })}
      </div>
    </div>
  )
}
export default Home
