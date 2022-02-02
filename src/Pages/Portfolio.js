import React from 'react';
import '../App.css';


import ImageList from "./Projects";

function Portfolio(props) {
    const {imageName = {}} = props;
    return (
        <div>
            <h1 id="portfolio">Projects</h1>
            <ImageList name={imageName.name}/>
        </div>
    );
}

export default Portfolio;