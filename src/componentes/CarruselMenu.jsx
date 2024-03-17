import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CarouselMenu = () => {

    const settings = {
        rtl: true,
        dots: false,
        infinite: true,
        speed: 1000, // Ajusta la velocidad a un valor más bajo
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Aumenta el intervalo entre los cambios
        pauseOnHover: true // Pausar la reproducción automática cuando el mouse está encima
    };


    const shadowColors = ['shadow-md shadow-green-200', 'shadow-md shadow-blue-200', 'shadow-md shadow-red-200', 'shadow-md shadow-yellow-200', 'shadow-md shadow-indigo-200'];

    // Función para obtener un color de sombra aleatorio de la matriz
    const getRandomShadowColor = () => {
        return shadowColors[Math.floor(Math.random() * shadowColors.length)];
    };

    return (
        <div className="font-bold">
            <Slider {...settings}>
                <div>
                    <p className={`bg-slate-100 border gap-5 m-2 text-center rounded-full text-gray-700 p-1 ${getRandomShadowColor()}`}>Lacteos</p>
                </div>
                <div>
                    <p className={`bg-slate-100 border gap-5 m-2 text-center rounded-full text-gray-700 p-1 ${getRandomShadowColor()}`}>Gaseosa</p>
                </div>
                <div>
                    <p className={`bg-slate-100 border gap-5 m-2 text-center rounded-full text-gray-700 p-1 ${getRandomShadowColor()}`}>Cigarrillos</p>
                </div>
                <div>
                    <p className={`bg-slate-100 border gap-5 m-2 text-center rounded-full text-gray-700 p-1 ${getRandomShadowColor()}`}>Limpieza</p>
                </div>
                <div>
                    <p className={`bg-slate-100 border gap-5 m-2 text-center rounded-full text-gray-700 p-1 ${getRandomShadowColor()}`}>Vinos</p>
                </div>
                <div>
                    <p className={`bg-slate-100 border gap-5 m-2 text-center rounded-full text-gray-700 p-1 ${getRandomShadowColor()}`}>Fiambre</p>
                </div>
            </Slider>
        </div>
    );
};
export default CarouselMenu;