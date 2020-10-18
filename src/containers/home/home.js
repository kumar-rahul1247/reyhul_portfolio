import React, {useState,useEffect} from 'react'
import HomeCSS from './home.module.css';

const Home = () => {
 
    return (
        <div className={HomeCSS.home} id="home">
            <div className={HomeCSS.max_width}>
                <div className={HomeCSS.home_content}>
                    <div className={HomeCSS.text_1}>Hi, My name is</div>
                    <div className={HomeCSS.text_2}>Rahul Kumar</div>
                    <div className={HomeCSS.text_3}>And I'm a <span>Developer</span></div>
                    <a href="#">HIRE ME</a>
                </div>
            </div>
        </div>
    )
}

export default Home
