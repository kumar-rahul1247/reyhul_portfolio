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
                                    style={{ background: "transparent", width: 30 }} />
                                <p>{item.name}</p>
                            </div>
                        )

                        )
                    }

                </div>
            </div>
            <div className="skill_back">
                <div className="skill_detail">
                    <h2>{title}</h2>
                    <Skillbar percentToshow={false}/>
                    <Skillbar/>
                    <Skillbar/>
                    <Skillbar/>
                    <Skillbar/>

                </div>
            </div>
        </div>
    )
}

export default skillcard
