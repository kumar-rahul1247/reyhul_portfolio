import React from 'react'
import './skills.css';
import Skillcard from './skillcard';
import ReactNativeLogo from "../../assets/reactLogo.png";
const skills = () => {

    let frontentist=[{
        name:"Reactjs",
        logo:ReactNativeLogo 
    },
    {
        name:"javascript",
        logo:"../../assets/reactLogo.png" 
    },
    {
        name:"HTML5",
        logo:"../../assets/reactLogo.png" 
    },
    {
        name:"CSS3",
        logo:"../../assets/reactLogo.png" 
    },
    {
        name:"Redux",
        logo:"../../assets/reactLogo.png" 
    }];

    return (
        <div className="skills" id="skills">
            <div className="max_width">
                <h2 className="title">Tech Skills</h2>
                <div className="skills_content">
                    <Skillcard title="Frontend" itemList={frontentist}/>
                    <Skillcard title="Backend"/>
                    <Skillcard title="Database"/>
                    <Skillcard title="Mobile Development"/>
                    <Skillcard title="Control Version"/>
                    <Skillcard title="Lets C"/>
                    
                </div>
            </div>
        </div>
    )
}

export default skills
