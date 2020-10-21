import React from 'react';
import './ProfileCard.css';
import ProfilePic from '../../assets/reyh_pic.jpg';

import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const FlipCard = () => {
    
    return (
        <div className="profile_card">
            <div className="profile_front"><img src={ProfilePic} alt="" className="profileDP"/></div>
            <div className="profile_back">
                <div className="profile_detail">
                    <h2>Rahul Kumar<br/><span>Full Stack Developer</span></h2>
                    <div className="profile_social_icons">
                        <a href="#"><FacebookIcon className="icon_ele"/></a>
                        <a href="https://github.com/kumar-rahul1247" target="_blank">
                            <GitHubIcon className="icon_ele"/></a>
                        <a href="#contacts"><EmailIcon className="icon_ele"/></a>
                        <a href="https://www.linkedin.com/in/reyhul-codethedestiny/" target="_blank">
                            <LinkedInIcon className="icon_ele"/>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipCard
