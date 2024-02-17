import React from 'react';
import {  Navigate } from 'react-router-dom';
import auth from '../services/auth';

const PrivateRoute = ({ children }) => {
  return auth.isAuthenticated() ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
