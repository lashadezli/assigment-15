import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../services/auth';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/login'); 
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
