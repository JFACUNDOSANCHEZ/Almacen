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