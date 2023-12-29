// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Link to="/SecondPage">Go to Second Page</Link>
    </div>
  );
};

export default HomePage;
