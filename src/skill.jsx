import React from "react";
import "./skill.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

 const Skill=()=>{
    const [counterOn, setCounterOn] = useState(false);
    return(
        <>
           <div className="overall-skill" id="skill">
           <div className="skill">
               <h1> Skills</h1>
               <h2>Skills</h2>
             </div>
             
             <div className="Skills_content">
             <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                    <div className="progres">
                        <div className="progresbar_details">
                            <h1> HTML5</h1>
                            <h1>{counterOn && <CountUp start={0} end={100} duration={3} />}%</h1>
                        </div>
                        <div className="progresbar">
                            <div className="bar bar1">

                            </div>

                        </div>
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                    <div className="progres">
                        <div className="progresbar_details">
                            <h1> CSS3</h1>
                            <h1>{counterOn && <CountUp start={0} end={95} duration={3} />}%</h1>
                        </div>
                        <div className="progresbar">
                            <div className="bar bar2">

                            </div>

                        </div>
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                    <div className="progres">
                        <div className="progresbar_details">
                            <h1> BOOTSTRAP</h1>
                            <h1>{counterOn && <CountUp start={0} end={90} duration={3} />}%</h1>
                        </div>
                        <div className="progresbar">
                            <div className="bar bar2">

                            </div>

                        </div>
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                    <div className="progres">
                        <div className="progresbar_details">
                            <h1> JAVA SCRIPT</h1>
                            <h1>{counterOn && <CountUp start={0} end={85} duration={3} />}%</h1>
                        </div>
                        <div className="progresbar">
                            <div className="bar bar3">

                            </div>

                        </div>
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                    <div className="progres">
                        <div className="progresbar_details">
                            <h1> React</h1>
                            <h1>{counterOn && <CountUp start={0} end={80} duration={3} />}%</h1>
                        </div>
                        <div className="progresbar">
                            <div className="bar bar4">

                            </div>

                        </div>
                    </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                    <div className="progres">
                        <div className="progresbar_details">
                            <h1> CORE JAVA</h1>
                            <h1>{counterOn && <CountUp start={0} end={80} duration={3} />}%</h1>
                        </div>
                        <div className="progresbar">
                            <div className="bar bar2">

                            </div>

                        </div>
                    </div>
                    </ScrollTrigger>

                </div>

           </div>
        </>
    )
}
export default Skill;