import React from "react";
import "./project.css";
import CWC from "./assets/india vs aus link.jpg";
import Boots from "./assets/learn bootsrap.png";
import Kitchen from "./assets/kitchen project.png";
import { FaLink } from "react-icons/fa6";


export default function Project(){
    return(
        <>
        <div className="project-overall" id="project">
        <div className="project">
               <h1> Projects</h1>
               <h2>Project</h2>
             </div>

             <div className="Images-div">
                <div className="image-one">
                    <div className="project-content">
                        <h1>Men's CWC2023</h1>
                        <p>Spectators Watch Virat kholi walk in to Bat</p>
                        <p>Rohit sharma and virat kohli cut dissapoinment figures at the presentation</p>
                    </div>
                </div>
                <div className="image-two">
                    <div className="project-content-two">
                        <h1>IND vs AUS</h1>
                        <p>India vs Australia final match...</p>
                        <p>Fire works go off at the Narendra modi stadium Australia won the match.</p>
                    </div>
                </div>
                <div className="image-one boots-one">
                    <div className="project-content">
                        <h1>Precompiled Bootstrap</h1>
                        <p>The Bootstrap source code download includes the precompiled CSS and JavaScript</p>
                        <p>precompiled files for quick drop-in usage in nearly any web project</p>
                    </div>
                </div>
                <div className="image-two boots-two">
                    <div className="project-content-two">
                        <h1>Bootstrap source code</h1>
                        <p>The scss/ and js/ are the source code for our CSS and JavaScript. </p>
                        <p>The dist/ folder includes everything listed in the precompiled download section above.</p>
                    </div>
                    
                </div>
                <div className="image-one kitchen-one">
                    <div className="project-content">
                        <h1>Nestasia Kitchen World</h1>
                        <p>Our beautifully crafted ceramic bowls and bowl sets are perfect for serving. </p>
                        <p>Explore the widest selection of serving bowls featuring beautiful marbled patterns</p>
                    </div>
                </div>
                <div className="image-two kitchen-two">
                    <div className="project-content-two">
                        <h1>Buy Keychains Online At Nestasia</h1>
                        <p>Penguin Keyring</p>
                        <p>Combining form and function, our penguin keyring breaks the adorability scale.</p>
                    </div>
                </div>
                <div className="link-card-div">

                    <div className="card card-1">
                        <img src={CWC}/>
                        <h1>CWC2023</h1>
                        <p>Men's Cricket World Cup 2023 matches</p>
                        <a href="https://kamatchi5434.github.io/cwc2023/"><FaLink /></a>
                    </div>

                    <div className="card card-2">
                        <img src={Boots}/>
                        <h1>Learn Bootsrap</h1>
                        <p>The Bootstrap source code download includes the precompiled CSS and JavaScript</p>
                        <a href="https://kamatchi5434.github.io/bootsrap/"><FaLink /></a>
                    </div>

                    <div className="card card-3">
                        <img src={Kitchen}/>
                        <h1>Nestasia Kitchen</h1>
                        <p>It is a GRoup Project.collabrate GitHub</p>
                        <a href="https://kamali42.github.io/Group-projects/"><FaLink /></a>
                    </div>

                </div>
                </div>
            </div>
        </>
    )
} 