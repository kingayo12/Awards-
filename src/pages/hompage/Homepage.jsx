import React, {useState, useEffect } from 'react';
import IUO from '../../img/iuologo.png';
import Nuesa from '../../img/nuesalogo.png';
import LoadingAnimation from '../../component/LoadingAnimation';
import {useNavigate, Outlet } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate loading data
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }, []);

function handle(){
    navigate('/Award')
}
  return (
    <div>
    {isLoading ? <LoadingAnimation /> : <div className='homepage_container px-4 py-4 flex items-center justify-between flex-col '>
      <div className="logo-container flex justify-between items-center gap-4">
        <img src={IUO} alt="" className='w-20 h-20' />
        <div className="line w-2 h-24"></div>
        <img src={Nuesa} alt="" className='w-24 H-24'/>
      </div>

      <div className="h-box w-full flex items-center justify-center  rounded-3xl py-2 px-2">
        <div className="h-text font-serif text-3xl text-center">Hey there! <br></br>
Welcome <br></br>
 We celebrate the rockstar engineering students who are crushing it in their department! We've got some awesome awards to recognize the most outstanding students in different categories.</div>
      </div>

      <button
      onClick={handle}
      className='w-full h-16 text-sm h-button'>Continue</button>
      <Outlet/>
    </div>
    }
    </div>
  )
}

export default Homepage
