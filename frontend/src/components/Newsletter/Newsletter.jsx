import React from 'react'
import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div className='Newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to Our Newletter and Stay updated</p>
        <div>
           <input type='email' placeholder='Your E-mail Id'></input>
           <button>Subcribe</button>
        </div>

    </div>
  )
}
