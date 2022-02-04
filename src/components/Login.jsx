import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AUTH_USER } from '../api';

const Login = ({  }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const authenticateUser = () => {
    const user = {
      email: username,
      password
    }
    try {
      fetch(AUTH_USER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      })
      .then(response => response.json())
      .then(data => console.log(data))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="login">
      <label> Username </label>
      <input
        type="email" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label> Password </label>
      <input
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={authenticateUser}>Submit</button>
    </div>
  )
}

export default Login;