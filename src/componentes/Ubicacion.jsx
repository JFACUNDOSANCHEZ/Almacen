import React from 'react'
import Nav from './Nav';
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


        <div className="h-screen max-w-screen-xl mx-auto  w-[98%] ">
<Nav></Nav>
        <div className="h-1/2 relative">
          <img className="absolute inset-0 w-full h-full object-cover" src="https://www.mibolsillo.com/__export/1701123333399/sites/debate/img/2023/11/27/maps.png_903948830.png" alt="" />
        </div>
        <div className="text-center">
          <div className="flex justify-center">

          </div>
         <br />
          <div className="flex flex-col justify-center items-center">
            <div className="bg-gray-200 w-24 p-1 shadow-teal-700 shadow-sm rounded-full font-bold">
              <span>Ubicación:</span>
            </div>
            <p className="mt-1 font-medium ml-2">
              Calle Congreso Nacional 565 frente a Plaza Los Amigos
            </p>
            <div className="bg-gray-200 w-24 p-1 shadow-teal-700 shadow-sm rounded-full font-bold mt-6">
              <span>Horario:</span>
            </div>
            <p className="mt-1 font-medium ml-2">
              Lunes a Viernes: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    );
}