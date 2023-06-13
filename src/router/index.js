import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import Contact from '../pages/Contact.js';
import About from '../pages/About.js';
import Student from '../pages/Students.js';

function MyRouter (){

    return (
        <Routes>
            <Route path= "/" element={ <Home /> } />
            <Route path= "/Contact-us" element={ <Contact /> } />
            <Route path= "/About-us" element={ <About /> } />
            <Route path= "/Students" element={ <Student /> } />
        </Routes>
        
    );

}

export default MyRouter;