// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateLogin = () => {
    if (username === 'krishna' && password === 'krishna123') {
      navigate('/homepage');
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className='main-container'>
      <div className='login-container-details'>
        <h3>Login Details</h3>
        <hr/>
        <p>username: krishna</p>
        <p>password: krishna123</p>
      </div>
      <h1>Login</h1>
      <div className="login-container">
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">USERNAME</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">PASSWORD</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={validateLogin}>
          Login
        </button>
      </form>
      <p id="error-message" className="text-danger">{errorMessage}</p>
      </div>
    </div>
  );
};

export default Login;
