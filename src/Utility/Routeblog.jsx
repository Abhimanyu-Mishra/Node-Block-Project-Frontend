import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../Componant/Home'
import Movies from '../Componant/Movies'
import Fitness from '../Componant/Fitness'
import Food from '../Componant/Food'
import Technology from '../Componant/Technology'
import News from '../Componant/News'
import OpenCard from './OpenCard'


const Routeblog = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/movies' element={<Movies/>}/>
    <Route path='/fit' element={<Fitness/>}/>
    <Route path='/food' element={<Food/>}/>
    <Route path='/tech' element={<Technology/>}/>
    <Route path='/news' element={<News/>}/>
    <Route path="/card" element={<OpenCard/>}/>

    </Routes>
    </div>
  )
}

export default Routeblog
