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
    <div className="h-64 mb-8 md:h-[40%]">

      <Slider {...settings}>
        <div>
          <img src="https://www.branca.com.ar/wp-content/uploads/2021/09/Fernet-Branca-Soy-unico_Highlights-01-940x528.png" alt="Imagen 1" className='  w-full h-64 mb-8 md:h-84 object-cover' />
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/N1NQuyJnWIk/sddefault.jpg" alt="Imagen 2" className='w-full h-64 mb-8 md:h-84 object-cover' />
        </div>
        <div>
          <img src="https://www.on24.com.ar/wp-content/uploads/2018/05/PALADNI_HAMBRIENTOS-DE-GLORIA.jpg" alt="Imagen 2" className='w-full h-64 mb-8 md:h-84  object-cover' />
        </div>
        <div>
          <img src='https://i.ytimg.com/vi/6-WPPEZrxds/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBggZShWMA8=&rs=AOn4CLC5UEIq-z7tVes284mTekDehJNoDg' alt="Imagen 2" className='w-full h-64 mb-8 md:h-84 object-cover' />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;