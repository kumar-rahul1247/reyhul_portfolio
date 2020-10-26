import React, { useState, useEffect } from 'react'
import HomeCSS from './home.module.css';
import Typewriter from 'typewriter-effect';

let startTyping = false;

setTimeout(() => { startTyping = true }, 5500);

const Home = () => {

    const [startTyping, setStartTyping] = useState(false)

    useEffect(() => {
        setTimeout(() => { setStartTyping(true) }, 7000);

    }, [])


    let showTyper = <Typewriter options={{
        strings: ['Full Stack Developer', 'Quick Learner', 'Problem Solver'],
        autoStart: true,
        loop: true,
    }}
    />;
    if (!startTyping) {
        showTyper = null;
    }
    return (
        <div className={HomeCSS.home} id="home">
            <div className={HomeCSS.max_width}>
                <div className={HomeCSS.home_content}>
                    <div className={HomeCSS.text_1}>Hi, My name is</div>
                    <div className={HomeCSS.text_2}>Rahul Kumar</div>
                    <div className={HomeCSS.text_3}>And I'm a &nbsp;
                        <span>
                            {showTyper}
                        </span>
                    </div>
                    <a href="#contact">HIRE ME</a>
                </div>

            </div>
        </div>
    )
}

export default Home
