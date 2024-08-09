import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Kar from '../assets/Images/Kara.jpg';
import Card from './Card';

function Kara() {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function downloadCharacters() {
    try {
      const response = await axios.get(`https://narutodb.xyz/api/kara?page=${page}&limit=10`);
      const promiseData = response.data.kara;
      const data = await axios.all(promiseData);
      setCharacters(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    downloadCharacters();
  }, [page]);

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <h1 className="text-center text-4xl sm:text-6xl lg:text-8xl font-serif tracking-wide mt-4 text-white image-text">
        Kara
      </h1>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <img className="w-full h-auto max-w-lg bg-cover" src={Kar} alt="Loading" />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 p-4">
          {characters.map((item) =>
            item.images[0] ? <Card key={item.id} id={item.id} name={item.name} image={item.images[0]} /> : null
          )}
        </div>
      )}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          hidden={page === 1}
        >
          Prev
        </button>
        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          hidden={page === 4}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Kara;
