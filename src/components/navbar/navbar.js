import React, { useState, useEffect } from 'react'
import NavbarCSS from './navbar.module.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState(0)
    console.log(window.pageYOffset);

    let openNavbar = () => {
        setOpen(!open);
    }

    let handleScroll = () => {
        setPosition(window.pageYOffset);
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    let headerCSS = NavbarCSS.navbar;
    if(position > 60){
        headerCSS = headerCSS + ' ' + NavbarCSS.sticky;
    }
    

    return (
        <div className={headerCSS}>
            <div className={NavbarCSS.max_width}>
                <div className={NavbarCSS.logo}><a href="#"><span>Ra</span>hul <span>Ku</span>mar</a></div>
                <ul className={open ? NavbarCSS.menu + ' ' + NavbarCSS.active : NavbarCSS.menu}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    {/* <li><a href="#experience">Experience</a></li> */}
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className={NavbarCSS.navIcon} onClick={openNavbar}>
                    {
                        open ? <CloseIcon className={NavbarCSS.navIcon} /> : <DehazeIcon className={NavbarCSS.navIcon} />
                    }

                </div>

            </div>

        </div>
    )
}

export default Navbar
