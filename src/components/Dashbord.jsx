import React, { useEffect, useState } from 'react';
import LogoutButton from './LogoutButton';
import classes from '../modules/Dashboard.module.scss'

const Dashboard = () => {
  const [randomUserData, setRandomUserData] = useState(null);

  useEffect(() => {
    const fetchRandomUserData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        const randomUser = data[Math.floor(Math.random() * data.length)];

        setRandomUserData(randomUser);
      } catch (error) {
        console.error('Error fetching random user data:', error);
      }
    };

    fetchRandomUserData();
  }, []);

  return (
    <div className={classes['dashboard']}>
      
      {randomUserData ? (
        <>
          <h3>Welcome, {randomUserData.name}!</h3>
          <h2>Your Information:</h2>
          <p>Username: {randomUserData.username}!</p>
          <p>Email: {randomUserData.email}</p>
          <p>Phone: {randomUserData.phone}</p>
          <p>Website Domain: {randomUserData.website}</p>
          <LogoutButton />
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Dashboard;
