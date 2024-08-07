import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Akatsuki from './component/Akatsuki'
import Header from './component/Header'
import Kara from './component/Kara'

function App() {


  return (
    <>
    <Header/>
   <Routes>
   <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/akatsuki" element={<Akatsuki/>}/>
    <Route path="/kara" element={<Kara/>}/>
   </Routes>
  
    </>
  )
}

export default App
