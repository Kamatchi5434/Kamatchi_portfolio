import React,{useRef} from "react";
import "./contact.css";
import ContactDet from "./assets/contact-illustration.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bu5vuhl', 'template_ppivfjj', form.current, '-42HQlQ7ZpSP2wgD4')
            .then((result) => {
                console.log(result.text);
                console.log("message sent!")
            }, (error) => {
                console.log(error.text);
                console.log("error sending message, try again!")
            });
        };
    return(
        <>
        <div className="overall-contact" id="contact">
        <div className="contact">
               <h1> Contact</h1>
               <h2>Contact</h2>
             </div>

                <div className="contact-details">
                    <img src={ContactDet}/>
                    <div>
                    <form id="form"  ref={form} onSubmit={sendEmail}>
                <div class="title">Sign In</div>
                <div>
                    <label for="username">User Name</label>
                      <i class="fas fa-user"></i>
        
                      <input type="text" name="user_name" id="username" placeholder="Kamatchi"/>
                      <i class="fas fa-exclamation-circle failure-icon"></i>
                      <i class="far fa-check-circle success-icon"></i>
        
                      <div class="error"> </div>
                </div>
                   <div>
                       <label for="email">Email</label>
                        <i class="far fa-envelope"></i>
                        <input type="email" name="mail" id="email" placeholder="abc@gmail.com"/>
                        <i class="fas fa-exclamation-circle failure-icon"></i>
                        <i class="far fa-check-circle success-icon"></i>
                        <div class="error"></div>
                    </div>
                   <div>
                        <label for="password">Message</label>
                        <i class="fas fa-lock"></i>
        
                       <textarea type="message" name="message" id="message" placeholder="Enter Your Message"></textarea>
        
                       <i class="fas fa-exclamation-circle failure-icon"></i>
                       <i class="far fa-check-circle success-icon"></i>
        
                       <div class="error"></div>
                    </div>
                    
                    <button id="btn" type="submit" value="Send">Submit</button>
                    
            </form>
                    </div>
                </div>

        </div>
        </>
    )
}
export default Contact;