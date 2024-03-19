import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import model from '../assets/Model.jpg'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRVIALS ONLY</h2>
            <div className='hand-handicon'>
              <p>New</p>
              <img src={hand_icon}/>
            </div>
            <p>Collections</p>
            <p>For Everyone</p>
            <div className='hero-latest-btn'>
              <div>Latest Collection</div>
              <img src={arrow_icon}/>
            </div>
        </div>
        <div className='hero-right'>
            <img src={model}/>
        </div>

    </div>
  )
}
