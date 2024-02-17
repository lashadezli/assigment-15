import React, { useState } from 'react';
import classes from '../modules/Register.module.scss'
import { Link } from 'react-router-dom';

const RegisterForm = ({ onRegistration }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Registration successful:', formData);
      onRegistration(formData);
      setRegistrationSuccess(true); 
    } else {
      console.log('Invalid form submission');
    }
  };


  return (
    <form className={classes['Form']} onSubmit={handleSubmit}>
      <div className={classes['inputs']}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <div className={classes['error']}>{errors.username}</div>
      </div>
      <div className={classes['inputs']}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <div className={classes['error']}>{errors.email}</div>
      </div>
      <div className={classes['inputs']}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className={classes['error']}>{errors.password}</div>
      </div>
      <button type="submit">Register</button>
       <p>already have an account?  <Link to="/login">Login</Link></p>
    </form>
  );
};

export default RegisterForm;
