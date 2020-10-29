import React from 'react';
import './projects.css';
import ExpandableCard from '../../components/SpecialEffectComponent/ExpandableCard';
import {projectDesc} from './projectDescription'

const Projects = () => {
    let projectSeg1=[];
    let projectSeg2=[];

    projectDesc.forEach((element, index) => {
        if(index%2==0){
            projectSeg1.push(<ExpandableCard projectDetail={element}/>)
        }
        else{
            projectSeg2.push(<ExpandableCard projectDetail={element}/>) 
        }
    })

    return (
        <div className="projects" id="projects">
            <div className="max_width" >
                <h2 className="title">Projects</h2>
                <div className="projects_content">
                    <div>
                        {projectSeg1}
                    </div>
                    <div>
                        {projectSeg2}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects
