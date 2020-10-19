import React from 'react'
import './skills.css';
import Skillcard from './skillcard';
import {allskills} from './allskills';

const skills = () => {

    let skillcardArray=[]
    for (const key in allskills) {

        let skillcard= <Skillcard title={key} itemList={allskills[key]}/>
        skillcardArray.push(skillcard);
    }


    return (
        <div className="skills" id="skills">
            <div className="max_width">
                <h2 className="title">Tech Skills</h2>
                <div className="skills_content">
                    {skillcardArray}
                    {/* <Skillcard title="Frontend" itemList={frontentist}/>
                    <Skillcard title="Backend"/>
                    <Skillcard title="Database"/>
                    <Skillcard title="Mobile Development"/>
                    <Skillcard title="Control Version"/> */}
                  
                    
                </div>
            </div>
        </div>
    )
}

export default skills
