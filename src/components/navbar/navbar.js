import React, {useState} from 'react'
import NavbarCSS from './navbar.module.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';


const Navbar = () => {
    const [open, setOpen] = useState(false);

    let openNavbar = () => {
        setOpen(!open);
    }

    let check = NavbarCSS.menu+' '+(open ? NavbarCSS.active:'');
    console.log(check)
    return (
        <div className={NavbarCSS.navbar+' '+NavbarCSS.sticky}>
            <div className={NavbarCSS.max_width}>
                <div className={NavbarCSS.logo}><a href="#"><span>Ra</span>hul <span>Ku</span>mar</a></div>
                <ul className={open ?NavbarCSS.menu+' '+NavbarCSS.active:NavbarCSS.menu}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                
                <div className={NavbarCSS.navIcon} onClick={openNavbar}>
                    {
                        open ? <CloseIcon className={NavbarCSS.navIcon}/> : <DehazeIcon className={NavbarCSS.navIcon}/>
                    }
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Navbar
