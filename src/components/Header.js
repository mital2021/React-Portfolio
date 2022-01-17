import React  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
// import Project from '../components/Project';
// import Resume from '../components/Resume';
import Nav from '../components/Nav';

const Header = () =>{
    return(
        <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" component= {About} exact />
            <Route path="/contact" component={Contact} />
            
        </Routes>
    </BrowserRouter>
    )
}

export default Header