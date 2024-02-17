import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from '../modules/Login.module.scss'

const LoginForm = ({ onLoginSuccess, initialData }) => {
  const [loginData, setLoginData] = useState({
    username: initialData?.username || '',
    password: initialData?.password || '',
  });

  const [loginError, setLoginError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      loginData.username === initialData?.username &&
      loginData.password === initialData?.password
    ) {
      console.log('Login successful!');
      onLoginSuccess( window.location.href = '/dashboard');
    } else {
      console.log('Login failed!');
      setLoginError('Invalid username or password');
    }
  };

  return (
    <form className={classes['Form']} onSubmit={handleLogin}>
      <div className={classes['inputs']}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={loginData.username}
          onChange={handleInputChange}
        />
      </div>
      <div className={classes['inputs']}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
        />
        {loginError && <div className={classes['error']} style={{ color: 'red' }}>{loginError}</div>}
      </div>
      <button type="submit">Login</button>
      <p>dont have an account?  <Link to="/register">Register</Link></p>
    </form>
  );
};

export default LoginForm;
