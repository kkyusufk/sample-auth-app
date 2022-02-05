import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AUTH_USER } from '../api';
import { useAuth } from '../context/AuthContext';
import { localStorageUtil } from '../utils/localStorageUtil';
import { Loader } from './Loading';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);

  const { userData, setUserData } = useAuth();
  const navigate = useNavigate();

  const authenticateUser = (e) => {
    e.preventDefault();
    setLoading(true);
    const user = {
      email: username,
      password
    }
    fetch(AUTH_USER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => setUserData(data))
    .catch(err => setError(err.message))
  }

  useEffect(() => {
    setLoading(false);
    if (userData.error) {
      setError('Username or password is incorrect' + ' ' + userData.message)
    } else if (userData.data?.token) {
      localStorageUtil.setItem('data', userData)
      navigate('/dashboard');
    }
  }, [userData])

  return (
    <div className="login">
      <div className='heading'>Sample Auth</div>
      <Loader isLoading={loading} />
      <form onSubmit={authenticateUser}>
        <div className='input-divs'>
          <label> Username </label>
          <input
            type="email" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setError('')}
            required
          />
        </div>
        <div className='input-divs'>
          <label> Password </label>
          <input
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setError('')}
            required
          />
        </div>
        <button className='login-button'>
          Login
        </button>
      </form>
      {error && <div className="error"> {error} </div>}
    </div>
  )
}

export default Login;