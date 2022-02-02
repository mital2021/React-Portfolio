import React from 'react'
import coverImage from "../assets/images/mital.jpg";
import '../App.css';



function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Mital Goghari</h1>
      <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
      <div className="my-2">
        <p>
        Having recently completed the Rutgers Coding Bootcamp, I am looking for a challenging position to utilize my technical skills in web applications development. I work well independently to handle assignments and am a quick learner.
      </p>
      </div>
    </section>
  )
}

export default About;
