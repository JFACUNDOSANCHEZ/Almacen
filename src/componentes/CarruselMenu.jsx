import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../view/Card';

const CarouselMenu = ({productos}) => {

    const settings = {
        rtl: true,
        dots: false,
        infinite: true,
        speed: 2000, // Ajusta la velocidad a un valor más bajo
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500, // Aumenta el intervalo entre los cambios
        pauseOnHover: true // Pausar la reproducción automática cuando el mouse está encima
    };



    return (
        <div className="font-bold">
      <Slider {...settings}>
        {productos.map(producto => (
          <Card key={producto.id} producto={producto} />
        ))}
      </Slider>
    </div>
    )
};
export default CarouselMenu;