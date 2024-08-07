import React, { useState,useEffect } from 'react'
import axios from 'axios';
import Hom from '../assets/Images/Home.jpg'
import Card from './Card';
function Home() {
    const [isloading,setisLoading]=useState(true);
    const [data,setData]=useState([]);
    const [page,setPage]=useState(3)
    const image=Hom
    async function downloadCharacters()
    {
        
        const response=await axios.get(`https://narutodb.xyz/api/character?page=${page}&limit=20`);
        const PromiseData=response.data.characters;
        const allData=await axios.all(PromiseData);
        setData(allData);
        setisLoading(false);
        
    }
    useEffect(() => {
        downloadCharacters();
      }, [page]);
  return (
    <div className='w-screen'>
       
        <h1 className='text-center text-8xl font-serif tracking-wide mt-4 image-text'>Naruto</h1>
        {isloading&&(<img className='w-full bg-cover' src={Hom}/>)}
   {!isloading&&(<div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  space-x-4 space-y-8 ml-12 bg-gray-900'>
     {
        data.map((item)=>(
           item.images[0] && (<Card id={item.id} name={item.name} image={item.images[0]} />)
           )
     )}
     </div>)}
     <div className='bg-gray-900 flex flex-col sm:flex-row justify-center items-center p-4 gap-5'>
  <button 
    className="h-12 w-full sm:w-[100px] bg-blue-600 hover:text-white m-2 sm:m-0" 
    onClick={() => {
      setPage(page && page - 1);
    }}
  >
    Prev
  </button>
  <button 
    className="h-12 w-full sm:w-[100px] bg-blue-600 hover:text-white m-2 sm:m-0" 
    onClick={() => {
      setPage(page + 1);
    }}
  >
    Next
  </button>
</div>
    </div>
  )
}

export default Home
