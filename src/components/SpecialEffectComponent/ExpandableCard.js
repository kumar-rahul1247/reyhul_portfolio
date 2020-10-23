import React from 'react';
import './ExpandableCard.css';
import ProfilePic from '../../assets/reyh_pic.jpg'

const ExpandableCard = ({ projectDetail }) => {
    return (
        <div className="expandable_card">
            <div className="imgBox">
                <img src={ProfilePic} alt=""/>
                <div className="project_heading">
                <h3>{projectDetail.name}</h3>
                <p>{projectDetail.tech}</p>
                </div>
                
            </div>
            <div className="card_content">
                    <p>{projectDetail.desc}</p>
                    <div className="project_link">
                        <li><a href={projectDetail.live} target="_blank">Live</a></li>
                        <li><a href={projectDetail.source} target="_blank">Source Code</a></li>
                        
                    </div>                
            </div>
        </div>
    )
}


export default ExpandableCard
