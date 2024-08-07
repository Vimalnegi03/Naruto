import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Kar from '../assets/Images/Kara.jpg'
import './Akatsuki.css'
import Card from './Card'
function Kara() {
    const [page,setPage]=useState(1)
    const [characters,setCharacters]=useState([])
    const[isloading,setisLoading]=useState(true)
    async function downloadCharacters()
    {
        const response = await axios.get(`https://narutodb.xyz/api/kara?page=${page}&limit=32`)
        const PromiseData=response.data.kara
        console.log(PromiseData);
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
         <h1 className='text-center text-8xl font-serif tracking-wide mt-4  image-text'>Kara</h1>
         </div>
          {isloading&&(<img className='w-full bg-cover' src={Kar}/>)}
     {!isloading&&(<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 space-x-4 space-y-8 ml-12 bg-gray-900 '>
       {
          characters.map((item)=>(
            
            item.images[0] && (<Card id={item.id} name={item.name} image={item.images[0]} />)
             
  
       ))}
      </div>)}
  
        
      </div>
      )
    }

export default Kara
