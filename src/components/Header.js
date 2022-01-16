import React  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Project from '../components/Project';
import Resume from '../components/Resume';
import Nav from '../components/Nav';

const Header = () =>{
    return(
        <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" component= {About} exact />
            <Route path="/project" component={Project} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume"><Resume /></Route>
        </Routes>
    </BrowserRouter>
    )
}

export default Header