import React from "react";
import "./home.css";
import Profile from "./assets/profilepic.jpeg";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Home(){
    return(
        <>
        <div className="home-div" id="home">
            <div className="content">
                <h4>Hello!!!</h4>
                <h1>I am <span>Kamatchi</span></h1>
                <h1><span>Front-End</span>  Developer</h1>
                <p>I'm a front end developer. I'm creating responsible for implementing visual elements that users see 
                    and interact with in a web application. I'm passionate about creating 
                    great user experiences and have a strong understanding of usability and accessibility standards.</p>
                <div className="bttn">
                    <button className="bttn1"><a href="#about">HIRE ME</a></button>
                    <button className="bttn2"><a href="#project">MY WORKS</a></button>
                </div>
                <div className="home-icons">
                 <a href="https://web.whatsapp.com/"><FaWhatsapp /></a>
                 <a href="https://www.instagram.com/single_queen_kamu33/"><FaInstagram /></a>
                 <a href="https://www.linkedin.com/in/kama-kama-5668042b5/"><FaLinkedinIn /></a>
                 <a href="https://github.com/Kamatchi5434"><FaGithub /></a>
                </div>
            </div>
                <div className="profile">
                    <img src={Profile}/>
                </div>
        </div>
        </>
    )
} 