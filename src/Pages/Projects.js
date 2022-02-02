import React, { useState } from "react";

const ImageList = () => {
    const [projects] = useState([
        {
            id: 1,
            src: require('../assets/images/myvalentine.png'),
            name: 'My Valentine',
            github: "https://github.com/jagydas/my-valentine/tree/mital",
            deploy:"https://my-valentine-app.herokuapp.com/"
        },
        {
            id: 2,
            src: require('../assets/images/weather.png'),
            name: 'Weather App',
            github: "https://github.com/mital2021/Weather-Dashboard",
            deploy:"https://mital2021.github.io/Weather-Dashboard/"

        },
        {
            id: 3,
            src: require('../assets/images/recipegenerator.jpg'),
            name: 'Recipe Generator',
            github:  "https://github.com/mital2021/Recipe-Generator",
            deploy:"https://mital2021.github.io/Recipe-Generator/"

        
        },
        {
            id: 4,
            src: require('../assets/images/digital-marketing-meeting.jpg'),
            name: 'Horiseon',
            github:  "https://mital2021.github.io/Horiseon/",
            deploy:"https://github.com/mital2021/Horiseon"

        
        }
   
    ]);

    return (
        <div className="row">
            {projects.map(item => (
                <div className="effect col-6 d-flex justify-content-center">
                    <div>
                        <p className="d-flex justify-content-center" />
                        <div className="effect-img">
                            <img
                                className="mb-5 rounded border border-danger"
                                key={item.id}
                                src={item.src}
                                width={'300px'}
                                height={'300px'}
                            />
                        </div>
                        <div className="effect-text">
                            <h2 style={{ color: 'white' }}>{item.name}</h2>
                            <p id="description">{item.descripiton}</p>
                            <div className="effect-btn">
                                <a className="btn" href={item.github}>GitHub</a>
                                <br />
                                <br />
                                <a className="btn" href={item.deploy}>Deploy</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default ImageList;
