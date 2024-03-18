import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



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
    <div className="h-44 mb-8 md:h-[40%]">

      <Slider {...settings}>
   
        <div>
          <img src="https://i.ytimg.com/vi/N1NQuyJnWIk/sddefault.jpg" alt="Imagen 2" className='w-full h-44 mb-8 md:h-84 object-cover' />
        </div>
        <div>
          <img src="https://lh3.googleusercontent.com/proxy/JDcMSVaEV-PUlPVLLKR-j86ApQg4l_f1amOu0plPpN3MUSCeIJi_N9v4cj8GjdfNj4fZ9VyS_r-q3c-GYnlA3gOnNMxB0ARN7A8sPux7GDWwWERWRP2ELwRxEKLwsZ8bbjfFFQ" alt="Imagen 2" className='w-full h-44 mb-8 md:h-84  object-cover' />
        </div>
        <div>
          <img src='https://mir-s3-cdn-cf.behance.net/projects/404/676577108427065.Y3JvcCw4NjIsNjc1LDEzNCww.jpg' alt="Imagen 2" className='w-full h-44 mb-8 md:h-84 object-cover' />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;