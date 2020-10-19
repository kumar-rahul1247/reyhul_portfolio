import React from 'react'
import Skillbar from '../../components/SpecialEffectComponent/Skillbar';
import './skillcard.css';
import ReactNativeLogo from "../../assets/reactLogo.png";

const skillcard = ({ title, itemList }) => {

 
    return (
        <div className="skill_card">
            <div className="skill_front">
                <h2>{title}</h2>
                <div className="skill_content">
                    {
                        itemList &&
                        itemList.map(item => (
                            <div className="skill_item">
                                <img src={item.logo} alt="React" 
                                    style={{ background: "transparent", width: 35, maxHeight: 30}} />
                                <p>{item.name}</p>
                            </div>
                        )

                        )
                    }
                </div>
                <div className="end_line"></div>
            </div>
            <div className="skill_back" style={{}}>
                <div className="skill_detail">
                    <h2>{title}</h2>
                    
                    {
                        itemList &&
                        itemList.map(item => (
                            <Skillbar name={item.name} percent={item.percentage} percentToshow={false}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default skillcard
