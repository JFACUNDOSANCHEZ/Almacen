import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="px-4 py-2 bg-blue-200 text-black rounded-full  hover:bg-blue-600"
    >
      {text}
    </button>
  );
};

export default Button;