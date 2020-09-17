import React from 'react'
import {Link} from 'gatsby'
import './about.css';

const AboutPage = () => {
    return(
        <div>
           <h1 className = "head">About Me</h1>
            <p className="head">I am Harshita Kanal</p> 
            <p className="head">Contact Me: <Link to = "/contact">Contact Me</Link></p>
        </div>
    )
}


export default AboutPage;