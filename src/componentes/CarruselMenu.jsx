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
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Aumenta el intervalo entre los cambios
        pauseOnHover: true // Pausar la reproducción automática cuando el mouse está encima
    };


    return (
        <div className=" font-bold ">


            <Slider {...settings} >
                <div> <p className=' bg-slate-100 border gap-5 m-5 text-center rounded-full text-gray-700  shadow-md shadow-green-200'> Lacteos</p>     </div>
                <div> <p className=' bg-slate-100 border gap-5 m-5 text-center rounded-full text-gray-700  shadow-md shadow-green-200'> Gaseosa</p>     </div>
                <div> <p className=' bg-slate-100 border gap-5 m-5 text-center rounded-full text-gray-700  shadow-md shadow-green-200'> Cigarrillos</p>     </div>
                <div> <p className=' bg-slate-100 border gap-5 m-5 text-center rounded-full text-gray-700  shadow-md shadow-green-200'> Limpieza</p>     </div>
                <div> <p className=' bg-slate-100 border gap-5 m-5 text-center rounded-full text-gray-700  shadow-md shadow-green-200'> Vinos</p>     </div>
                <div> <p className=' bg-slate-100 border gap-5 m-5 text-center rounded-full text-gray-700  shadow-md shadow-green-200'> Fiambre</p>     </div>

            </Slider>
        </div>
    );
};

export default CarouselMenu;