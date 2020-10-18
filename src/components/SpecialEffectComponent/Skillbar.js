import React from 'react';
import './Skillbar.css';

const Skillbar = ({ name, percent, percentToshow }) => {
    return (
        
        <div className="skillbar">
            <span className="name">{name ? name : 'Skill'}</span>
            <div className="percent">
                <div className="progress" style={{ width: percent }}></div>
            </div>
            <span className="value">{percentToshow ? percent : percent ? null : ''}</span>
        </div>
    )
}

export default Skillbar
