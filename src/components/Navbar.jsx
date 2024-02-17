import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../modules/Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={classes['navbar']}>
        <h1>
          LASHA
        </h1>
           <div className={classes['links']}> 
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
         </div>
      </div>
  );
};

export default Navbar;
