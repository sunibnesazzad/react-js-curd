import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import Contact from '../pages/Contact.js';
import About from '../pages/About.js';
import Student from '../pages/Students.js';
import StudentCreate from '../pages/StudentCreate.js';
import StudentEdit from '../pages/StudentEdit.js';
 
function MyRouter (){

    return (
        <Routes>
            <Route path= "/" element={ <Home /> } />
            <Route path= "/Contact-us" element={ <Contact /> } />
            <Route path= "/About-us" element={ <About /> } />
            <Route path= "/Students" element={ <Student /> } />
            <Route path= "/Students/create" element={ <StudentCreate /> } />
            <Route path= "/Students/:id/edit" element={ <StudentEdit /> } />

        </Routes>
        
    );

}

export default MyRouter;