import React from 'react'
import './contact.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CallIcon from '@material-ui/icons/Call';
import HomeIcon from '@material-ui/icons/Home';

const Contacts = () => {
    return (
        <div className="contact" id="contact">
            <div className="max_width">
                <h2 className="title">Contact</h2>
                <div className="contact_content">
                    <div className="contact_info">
                        <h5>Get In Touch</h5>
                        <ul>
                            <li><HomeIcon style={{ color: "#500b19" }} />
                                <p>AECS Layout, Brookfield Mall, Whitefield, Banglore, 750066 </p>
                            </li>
                            <li><EmailIcon style={{ color: "#500b19" }} /><p>kumar.rahul1247@gmail.com</p></li>
                            <li><CallIcon style={{ color: "#500b19" }} /><p>+91 8210166246</p></li>


                        </ul>

                        <div className="social_icons">
                            <a href="#"><FacebookIcon className="icon_ele" /></a>
                            <a href="#"><GitHubIcon className="icon_ele" /></a>
                            <a href="#"><EmailIcon className="icon_ele" /></a>
                            <a href="#"><LinkedInIcon className="icon_ele" /></a>

                        </div>
                    </div>

                    <form method="post">
                        <div className="contact_form">
                            <h2>Send Me Message</h2>
                            <div className="check">
                                <input type="text" name="name" placeholder="Name*" required="true" />
                            </div>
                            <div>
                                <input type="email" name="email" placeholder="Email*" required="true" />
                            </div>
                            <div>
                                <input type="text" name="mobile" placeholder="Mobile Number" />
                            </div>

                            <div>
                                <textarea name="message" placeholder="Please write Your Message.." />
                            </div>
                            
                            <button type="submit">Send </button>
                            
                           


                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contacts
