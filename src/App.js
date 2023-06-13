
import React from 'react';
//import { Link } from 'react-router-dom';
// import Home from './pages/Home.js';

import MyRouter from './router/index.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div>
      
      {/* <Link to ="/"> Home </Link><br></br>
      <Link to ="/Contact-us"> Contact </Link><br></br>
      <Link to ="/About-us"> About Us</Link> */}

      <Navbar />
      <MyRouter />

      {/* <Home /> */}

    </div>
    
  );
}

export default App;
