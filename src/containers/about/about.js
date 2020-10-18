import React from 'react';
import About from './about.css'
import ProfilePic from '../../assets/reyh_pic.jpg'

const about = () => {
    return (
        <div className="about" id="about">
            <div className="max_width">
            <h2 className="title">About Me</h2>
                <div className="about_content">
                    <div className="column_left">
                        <div className="profilePic">
                        <img src={ProfilePic} alt=""/>
                        </div>
                        
                    </div>
                    <div className="column_right">
                        <div className="text">I'm Rahul and I'm a <span>Developer</span></div>
                        <p>I am Developer and I love to code. Coding is a feeling for me like anything. My weakest 
                            point is that i cant go forward until the remaining task got completed.
                        </p>
                        <a href="">Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about
