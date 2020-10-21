import React from 'react';
import About from './about.css'
import ProfilePic from '../../assets/reyh_pic.jpg'
import FlipCard from './ProfileCard'
const about = () => {
    return (
        <div className="about" id="about">
            <div className="max_width">
            <h2 className="title">About Me</h2>
                <div className="about_content">
                    <div className="column_left">
                        <div className="profilePic">
                            <FlipCard/>
                        {/* <img src={ProfilePic} alt=""/> */}
                        </div>
                        
                    </div>
                    <div className="column_right">
                        <div className="text">Hello, I'm Rahul And <br></br> I'm a <span>Developer</span></div>
                        <p>Passionate to solve real world problem by utilizing all my skills and ideas to provide effective outcome.
                            I love to code and solve Problem by taking Challenges and participating in different Coding Contest.
                            Algorithm and Data Structure is my prime focus of interest which boost me in free time.
                            My weakest 
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
