import React from 'react'
import { useState } from 'react'




const SearchBar = ({ searchTerm, onSearchTermChange }) => {
  return (
    <div className='flex justify-center items-center w-full  '>
      
      <input
        onChange={onSearchTermChange}
        value={searchTerm}
        type="text"
        className='border shadow-sm shadow-slate-600 w-[70%] rounded-full p-2'
        placeholder='Buscar producto..'
      />
    </div>
  );
};
export default SearchBar