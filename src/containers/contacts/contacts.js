import React, {useState} from 'react'
import './contact.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CallIcon from '@material-ui/icons/Call';
import HomeIcon from '@material-ui/icons/Home';

const Contacts = () => {
    
    const [status, setStatus] = useState("");

    let submitForm = (ev) =>{
        ev.preventDefault();
        const form = ev.target;
        console.log("ji")
        console.log(form.action)
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, "https://formspree.io/f/xrgoqvz"); 
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            setStatus("SUCCESS");
          } else {
            setStatus("ERROR");

          }

          setTimeout(function(){ setStatus("") }, 3000);
        };
         xhr.send(data);
      }
    
      console.log(status)

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
                            <a href="https://github.com/kumar-rahul1247" target="_blank">
                                <GitHubIcon className="icon_ele" /></a>
                            <a href="#"><EmailIcon className="icon_ele" /></a>
                            <a href="https://www.linkedin.com/in/reyhul-codethedestiny/" target="_blank">
                                <LinkedInIcon className="icon_ele" /></a>

                        </div>
                    </div>

                    <form method="post" onSubmit={submitForm}>
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
                            {
                                status 
                                ? status === "SUCCESS" 
                                    ? <p style={{color: "green"}}>Successfully Sent..!!</p> 
                                    : <p style={{color: "red"}}>Error while Processing..!!</p>
                                : <button type="submit">Send </button>
                            }
                            
                            
                           


                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contacts
