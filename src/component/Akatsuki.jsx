import React,{useEffect,useState} from 'react'
import axios from 'axios'
import akatsuki from '../assets/Images/aktuski.webp'
import './Akatsuki.css'
import Card from './Card'
function Akatsuki() {
    const [page,setPage]=useState(3)
    const [characters,setCharacters]=useState([])
    const[isloading,setisLoading]=useState(true)
    async function downloadCharacters()
    {
        const response = await axios.get(`https://narutodb.xyz/api/akatsuki?${page}&limit=44`)
        const PromiseData=response.data.akatsuki
        const data=await axios.all(PromiseData)
        setCharacters(data)
        setisLoading(false)
    }
    useEffect(()=>{
        downloadCharacters()
    },[page])
  return (
    <div>
      <div>
       <h1 className='text-center text-8xl font-serif tracking-wide mt-4  image-text'>Akatsuki</h1>
       </div>
        {isloading&&(<img className='w-full bg-cover' src={akatsuki}/>)}
   {!isloading&&
   (<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 space-x-4 space-y-8 ml-12 bg-gray-900 '>
     {
        characters.map((item)=>(
          
          item.images[0] && (<Card key={item.id} id={item.id} name={item.name} image={item.images[0]} />)
           

     ))}
    </div>)}

      
    </div>
  )
}

export default Akatsuki
