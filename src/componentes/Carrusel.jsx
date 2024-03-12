import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import productos from '../data'


const Carousel = () => {
    const settings = {
         dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Habilitar la reproducción automática
        autoplaySpeed: 3000, // Intervalo de cambio automático en milisegundos (por ejemplo, 3 segundos)
      };
  return (
    <div className="h-64 mb-8 md:h-[50%] ">

    <Slider {...settings}>
      <div>
        <img src="https://www.shoppingpatagonia.com.ar/wp-content/uploads/2020/06/Kiosco-Shopping-Patagonia.jpg" alt="Imagen 1" className='  w-full h-64 mb-8 md:h-84 object-cover' />
      </div>
      <div>
        <img src="https://i.blogs.es/9a5723/mapssemaforos/450_1000.webp" alt="Imagen 2"  className='w-full h-64 mb-8 md:h-84 object-cover'/>
      </div>
      {/* <div>
        <img src="https://www.clarin.com/img/2020/10/08/H93Bbeq1f_1200x0__1.jpg" alt="Imagen 3" className='w-full h-64 mb-8 md:h-84 object-cover' />
      </div> */}
    </Slider>
    </div>
  );
};

export default Carousel;