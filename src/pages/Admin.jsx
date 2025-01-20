import React from 'react'
import { useState } from 'react';

const Admin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
    
        const hardcodedUsername = 'admin';
        const hardcodedPassword = 'password';
    
        if (username === hardcodedUsername && password === hardcodedPassword) {
          window.location.href = 'Admindash.jsx'
        } else {
          console.error('Authentication failed');
        }
      };

  return (
    <div>
        <div className='loginsinup'>
        <div className="loginsinup-container">
        <h1>Admin Login</h1>
        <div className="loginsinup-fields">
        <input type="text" placeholder="Username"  value={username}
              onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password"  value={password}
              onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <br />
          <button onClick={handleLogin}>Login</button>
    </div>
    </div>
    </div>
  )
}

export default Admin