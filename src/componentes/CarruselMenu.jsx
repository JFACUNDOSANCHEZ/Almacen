import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CarouselMenu = () => {
    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <button className="slick-arrow slick-prev" onClick={onClick}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        );
    };
    
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <button className="slick-arrow slick-next" onClick={onClick}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        );
    };
    const settings = {
        rtl: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Mostrar tres elementos por slide
        slidesToScroll: 1,
        autoplay: true, // Habilitar la reproducción automática
        autoplaySpeed: 3000, // Intervalo de cambio automático en milisegundos (por ejemplo, 3 segundos)
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };


    return (
        <div className=" font-bold ">
        

            <Slider {...settings}>
            <div className="     rounded-full text-gray-600 text-center hover:scale-150 transition-transform duration-300">Lacteos</div>
                <div className=" rounded-full text-gray-600 text-center hover:scale-150 transition-transform duration-300">Gaseosa</div>
                <div className=" rounded-full text-gray-600 text-center hover:scale-150 transition-transform duration-300">Cigarrillos</div>
                <div className=" rounded-full text-gray-600 text-center hover:scale-150 transition-transform duration-300">Limpieza</div>
                <div className=" rounded-full text-gray-600 text-center hover:scale-150 transition-transform duration-300">Vinos</div>
                <div className=" rounded-full text-gray-600 text-center hover:scale-150 transition-transform duration-300">Fiambre</div>
         
            </Slider>
        </div>
    );
};

export default CarouselMenu;