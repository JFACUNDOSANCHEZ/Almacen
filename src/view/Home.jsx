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
    <br /><br /><br />
      <div className='flex justify-center '>
        <SearchBar searchTerm={searchTerm}  onSearchTermChange={handleSearchTermChange} ></SearchBar>

      </div>
      <br />
      <div className="flex justify-center space-x-4 p-5 md:flex">
      <Button text="Limpieza" onClick={() => handleFilterClick('Limpieza')} img='https://www.coca-colaentuhogar.com/media/wysiwyg/refrescos_mob.png' className="flex-1" />
        <Button text="Bebidas" onClick={() => handleFilterClick('Bebidas')} img='https://globalservices.com.pe/blog/public/postimg/global-services-limpieza-20190913180100.png' className="flex-1" />
        <Button text="Lácteos" onClick={() => handleFilterClick('Lácteos')} img='https://static8.depositphotos.com/1063437/871/i/450/depositphotos_8711334-stock-photo-loaf-of-bread-isolated-on.jpg' className="flex-1" />
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
