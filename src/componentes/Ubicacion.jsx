import React from 'react'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Ubicacion() {
    const defaultProps = {
        center: {
            lat: 43.2922489,
            lng: 65.1098088
        },
        zoom: 11
    };

    return (


        <div className="h-screen">
            <div className="h-1/2 relative">
                <img className="absolute inset-0 w-full h-full object-cover" src="https://www.mibolsillo.com/__export/1701123333399/sites/debate/img/2023/11/27/maps.png_903948830.png" alt="" />
            </div>
            <div className="text-center">
                <div className="flex justify-center">
                    <img src="https://i.pinimg.com/736x/d2/14/f2/d214f23ff31bfbd0cded32db9f957b7e.jpg" alt="Mountain" className="h-36" />
                </div>
                <h1 className="text-3xl font-bold">El Andino</h1>

                    <p className="mt-4 font-medium">
                <div>
                        <span className='bg-blue-500 w-5 mt-4  p-2 rounded-full font-bold'>
                            Ubicacion:
                        </span>
                </div>
                        Calle Congreso Nacional 565, frente a Plaza Los Amigos</p>
                <p className="mt-6 font-medium">
                    <div>

                        <span className='bg-blue-500  p-2 rounded-full font-bold'>
                            Horario:
                        </span>
                    </div>
                    Calle Congreso Nacional 565, frente a Plaza Los Amigos</p>
            </div>
        </div>
    );
}