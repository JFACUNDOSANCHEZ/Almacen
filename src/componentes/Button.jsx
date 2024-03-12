import React from 'react';

const Button = ({ text, onClick, img }) => {
  return (
    <div className='w-[30%] items-center justify-center flex-colum text-center text-gray-600 font-mono '>

      {text}
<button 
      onClick={onClick} 
      className="px-4 py-2 text-black rounded-full transition-transform duration-300 transform hover:scale-105"
    >
      <img src={img} className=' max-h-[10rem] ' alt="" />
    </button>
      </div>
  );
};

export default Button;