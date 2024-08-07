import React from 'react'

function Card({ id, name, image }) {
  return (
    <div className='flex justify-center items-center p-4'>
      <div 
        className='flex flex-col items-center border border-solid border-t-red-500 border-b-blue-500 border-l-yellow-300 border-r-green-500 mt-4 ml-4 flex-wrap p-4 w-full max-w-xs' 
        key={id}
      >
        <h1 className='text-center text-2xl text-white tracking-wider font-serif mb-4'>{name}</h1>
        <img className='h-72 w-44 object-cover' src={image} alt={name} />
      </div>
    </div>
  );
}


export default Card
