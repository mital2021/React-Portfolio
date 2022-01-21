import React, { useState } from "react";
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Project from '../Pages/Project';
import Resume from '../Pages/Resume';
import Nav from '../components/Nav';


function Header() {
  
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {

        switch (currentPage) {
            case 'About':  return <About />;
            case 'Contact': return <Contact />;
            case 'Project': return <Project />;
            case 'Resume': return <Resume />;
            default: return <About />;
        }
    };

    return (
        <div>
            <div>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                <div>{renderPage(currentPage)}</div>
            </div>
        </div>
    );
}

export default Header;