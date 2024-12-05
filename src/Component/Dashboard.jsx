import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className='board'>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <div className='link'>
            <Link className='link' to="/create-recipe">Create Recipe</Link>
          </div>
        </li>
        <li>
          <div className='link'>
            <Link className='link' to="/update-recipe">Update Recipe</Link>
          </div>
        </li>
        <li>
          <div className='link'>
            <Link className='link' to="/view-recipe">View Recipe</Link>
          </div>
        </li>
        <li>
          <div className='link'>
            <Link className='link' to="/delete-recipe">Delete Recipe</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;