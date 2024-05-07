import React from "react";
import "./nav.css";
import { TiThMenu } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";

export default function Nav(){
    return(
        <>
        <div className="nav-bar">
            <h1><span>K</span>amatchi</h1>
            <label for="box"><TiThMenu /></label>
                
                <input type="checkbox" id="box" className="nav-input"/>
            
            <div className="right-nav">
                <a href="#home">
                    <div className="tag-icon">
                      <FaHome />
                      <h6>Home</h6>
                    </div>
                </a>
                <a href="#about">
                    <div className="tag-icon">
                      <IoPerson /> 
                      <h6>About</h6>
                    </div>
                </a>
                <a href="#resume">
                    <div className="tag-icon">
                     <FaGraduationCap />
                     <h6>Resume</h6>
                    </div>
                </a>
                <a href="#skill">
                    <div className="tag-icon">
                     <GiGiftOfKnowledge />
                     <h6>Skill</h6>
                    </div>
                </a>
                <a href="#project">
                    <div className="tag-icon">
                     <IoDocumentAttachSharp />
                     <h6>Project</h6>
                    </div>
                </a>
                <a href="#contact">
                    <div className="tag-icon">
                     <MdOutlineContactPhone />
                     <h6>Contact</h6>
                    </div>
                </a>
            </div>
        </div>
        </>
    )
}