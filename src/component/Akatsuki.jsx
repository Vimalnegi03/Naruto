import React, { useEffect, useState } from 'react';
import axios from 'axios';
import akatsuki from '../assets/Images/aktuski.webp';
import './Akatsuki.css';
import Card from './Card';

function Akatsuki() {
  const [page, setPage] = useState(3);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function downloadCharacters() {
    const response = await axios.get(`https://narutodb.xyz/api/akatsuki?${page}&limit=44`);
    const promiseData = response.data.akatsuki;
    const data = await axios.all(promiseData);
    setCharacters(data);
    setIsLoading(false);
  }

  useEffect(() => {
    downloadCharacters();
  }, [page]);

  return (
    <div className='bg-gray-900 min-h-screen'>
      <div>
        <h1 className='text-center text-4xl sm:text-6xl lg:text-8xl font-serif tracking-wide mt-4 text-white image-text'>
          Akatsuki
        </h1>
      </div>
      {isLoading && (
        <div className='flex justify-center items-center'>
          <img className='w-full bg-cover' src={akatsuki} alt="Loading" />
        </div>
      )}
      {!isLoading && (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4'>
          {characters.map((item) =>
            item.images[0] ? <Card key={item.id} id={item.id} name={item.name} image={item.images[0]} /> : null
          )}
        </div>
      )}
      
    </div>
  );
}

export default Akatsuki;
