import React from 'react'
import './CSS/Loginsinup.css'

const LoginSinup = () => {
  return (
    <div className='loginsinup'>
      <div className="loginsinup-container">
       <h1>Sign Up</h1>
       <div className="loginsinup-fields">
        <input type="text" placeholder="Username"/>
        <input type="email" placeholder="Email Address"/>
        <input type="password" placeholder="Password"/>
       </div>
       <button>Continue</button>
       <p className="loginsinup-login">Already have an account?<span>Login here</span></p>
       <div className="loginsinup-agree">
        <input type="checkbox" name = '' id = ''/>
        <p>By continuing , i agree to the terms of use & privacy policy</p>

       </div>
       </div>
       </div>
  
  )
}

export default LoginSinup