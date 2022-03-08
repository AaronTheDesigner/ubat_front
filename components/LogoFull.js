import React from 'react'
import BackgroundAnimation from './BackgroundAnimation';

const LogoFull = () => {
  return (
    <div className='inline-flex flex-col items-center bg-white rounded-lg pl-4 pt-4 pr-4 pb-6'>
        <div>
            <span className='font-bold text-9xl text-center equinox-bold uppercase logo'>UAT</span>
        </div>        
        <span className=' text-gray-500 text-3xl uppercase dosis-bold'>Upgrades by</span>
        <span className=' text-gray-500 text-3xl uppercase dosis-bold'>Aaron Toliver</span>
    </div>
  )
}

export default LogoFull