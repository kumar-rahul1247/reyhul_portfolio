import React from 'react';
import './ExpandableCard.css';
import ProfilePic from '../../assets/reyh_pic.jpg'

const ExpandableCard = () => {
    return (
        <div className="expandable_card">
            <div className="imgBox">
                <img src={ProfilePic} alt=""/>
                <div className="project_heading">
                <h3>Project One</h3>
                <p>hi.. Are You.. </p>
                </div>
                
            </div>
            <div className="card_content">
                    <p>I am ready to take any thing what ever i want but whart all
                    I am ready to take any thing what ever i want but whart all
                    I am ready to take any thing what ever i want but whart all
                    </p>
                    <div className="project_link">
                        <li>Live</li>
                        <li>Source Code</li>
                        
                    </div>                
            </div>
        </div>
    )
}


export default ExpandableCard
