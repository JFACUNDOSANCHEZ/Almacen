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
        autoplaySpeed: 4000, // Intervalo de cambio automático en milisegundos (por ejemplo, 3 segundos)
      };
  return (
    <div className="h-34 mb-8 md:h-[40%] ">

    <Slider {...settings}>
      <div>
        <img src="https://www.latinspots.com/files/notas/Gnota_37661.jpg" alt="Imagen 1" className='  w-full h-64 mb-8 md:h-84 object-cover' />
      </div>
      <div>
        <img src="https://i.ytimg.com/vi/N1NQuyJnWIk/sddefault.jpg" alt="Imagen 2"  className='w-full h-64 mb-8 md:h-84 object-cover'/>
      </div> 
       <div>
        <img src="https://www.progresando.com/wp-content/uploads/2022/03/714SB5qQtXL._AC_SL1500_.jpg" alt="Imagen 2"  className='w-full h-64 mb-8 md:h-84 object-cover'/>
      </div>
      <div>
        <img src="https://thefoodtech.com/wp-content/uploads/2022/12/Packaging-cervezas-Quilmes.jpg" alt="Imagen 2"  className='w-full h-64 mb-8 md:h-84 object-cover'/>
      </div>
    </Slider>
    </div>
  );
};

export default Carousel;