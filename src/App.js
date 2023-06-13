
import React from 'react';
import { Link } from 'react-router-dom';
// import Home from './pages/Home.js';

import MyRouter from './router/index.js';


function App() {
  return (
    <div>
      {/* <h1>Hello arpa</h1> */}
      <Link to ="/"> Home </Link><br></br>
      <Link to ="/Contact-us"> Contact </Link><br></br>
      <Link to ="/About-us"> About Us</Link>

      <MyRouter />

      {/* <Home /> */}

    </div>
    
  );
}

export default App;
