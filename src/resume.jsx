import React from "react";
import "./resume.css";
import { GiGraduateCap } from "react-icons/gi";

export default function Resume(){
    return(
        <>
        <div className="overall-resume" id="resume">
             <div className="education">
               <h1> Education</h1>
               <h2> Education</h2>
             </div>

             <div className="education-content">

                 <div className="detail-content">
                 <div className="edu-empty"></div>
                    <button> SSLC</button>
                    <div className="edu-details">
                        <h1><GiGraduateCap /> 2016 - 2018</h1>
                        <h2>  SSLC</h2>
                        <h3>Secondary School Leaving Certificate</h3>
                        <p> Government Hr Secondary School,Vilandai.</p>
                        <h4>65%</h4>
                    </div>
                 </div>

                 <div className="detail-content">
                 <div className="edu-empty"></div>
                    <button> HSC</button>
                    <div className="edu-details">
                        <h1><GiGraduateCap /> 2018 - 2020</h1>
                        <h2>  HSC</h2>
                        <h3>Higher Secondary Certificate</h3>
                        <p> Government Hr Secondary School,Vilandai.</p>
                        <h4>63.50%</h4>
                    </div>
                 </div>

                 <div className="detail-content">
                 <div className="edu-empty"></div>
                    <button> UG</button>
                    <div className="edu-details">
                        <h1><GiGraduateCap /> 2020 - 2023</h1>
                        <h2>  BCA</h2>
                        <h3>Bachelor of Computer Application</h3>
                        <p> Valliammai Women's College of Arts and Science,Arakandanallur.</p>
                        <h4>69%</h4>
                        <div className="edu-empty-under"></div>
                    </div>
                 </div>

                 <div className="detail-content">
                    <div className="edu-empty"></div>
                    <button> Course</button>
                    <div className="edu-details">
                        <h1><GiGraduateCap /> 2023 - 2024</h1>
                        <h3>Front - End Web Development Certificate</h3>
                        <p> Login-360, velachery,Chennai.</p>
                        <div className="edu-empty-under"></div>
                    </div>
                 </div>

             </div>

        </div>
        </>
    )
}