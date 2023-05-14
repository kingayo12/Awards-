import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Homepage from './pages/hompage/Homepage'
import Award from './pages/awardpage/Awaid'
import 'animate.css';
import Errorpage from './pages/404/Errorpage'

const App = () => {
    
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Award" element={<Award/>}/>
        <Route path="*" element={<Errorpage/>} />
    </Routes>
   
  )
}

export default App
