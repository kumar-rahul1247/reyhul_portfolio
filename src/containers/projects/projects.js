import React from 'react';
import './projects.css';
import ExpandableCard from '../../components/SpecialEffectComponent/ExpandableCard';

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="max_width" >
                <h2 className="title">Projects</h2>
                <div className="projects_content">
                    <div style={{marginTop:150}}>
                        <ExpandableCard />
                        <ExpandableCard />
                        <ExpandableCard />
                    </div>
                    <div style={{marginTop:400}}>
                        <ExpandableCard />
                        <ExpandableCard />
                        <ExpandableCard />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects
