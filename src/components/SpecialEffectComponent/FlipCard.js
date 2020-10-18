import React from 'react';
import './FlipCard.css';
import ProfilePic from '../../assets/reyh_pic.jpg';

import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const FlipCard = () => {
    
    return (
        <div className="flip_card">
            <div className="front"><img src={ProfilePic} alt="" className="profileDP"/></div>
            <div className="back">
                <div className="detail">
                    <h2>Rahul Kumar<br/><span>Full Stack Developer</span></h2>
                    <div className="social_icons">
                        <a href="#"><FacebookIcon className="icon_ele"/></a>
                        <a href="#"><GitHubIcon className="icon_ele"/></a>
                        <a href="#"><EmailIcon className="icon_ele"/></a>
                        <a href="#"><LinkedInIcon className="icon_ele"/></a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipCard
