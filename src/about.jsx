import React from "react";
import "./about.css";
import AboutImage from "./assets/about_me.jpeg";
import { FaDownload } from "react-icons/fa6";
import Cv from "./assets/kamatchi_resume.pdf";

export default function About(){
    return(
        <>
            <div className="about_overall" id="about">
            <div className="about">
               <h1> About Me</h1>
               <h2> About</h2>
             </div>

             <div className="personal-info">
                <div className="pic-div">
                    <img src={AboutImage}/>
                    <div className="empty"></div>
                </div>
                <div>
                <p>I'm professional Web Developer & Web Designer based working on different projects.</p>
                <div className="Personal_info-det">
                            <div className="personal_info_key">
                                    <h3> Name</h3>
                                    <h3> Birthday</h3>
                                    <h3> Language</h3>
                                    <h3> Address</h3>
                                    <h3> Email</h3>
                                    <h3> Phone</h3>
                            </div>
                            <div className="personal_info_value">
                                    <h3> : Kamatchi M</h3>
                                    <h3> : 16 th March 2003</h3>
                                    <h3> : English,Tamil</h3>
                                    <h3> : Chennai</h3>
                                    <h3> : www.kama5434@gmail.com</h3>
                                    <h3> : 8111056984</h3>
                                    <a href={Cv} download={Cv}><button>DOWNLOAD CV <FaDownload /></button></a>
                            </div>
                        </div>

             </div>
             </div>
            </div>
        </>
    )
} 