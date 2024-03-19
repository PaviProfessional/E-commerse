import React from 'react'
import './CSS/Loginsignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Enter Name'></input>
          <input type='email' placeholder='Enter E-mail'></input>
          <input type='password' placeholder='Password'></input>

        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>
          Alreay have an account?<span>Login here</span>
        </p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''></input>
          <p>By continuing , i agree to the terms of Use & Privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
