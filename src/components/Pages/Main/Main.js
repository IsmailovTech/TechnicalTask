import React from 'react';
import './Main.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import Roll from 'react-reveal/Roll';
import Flip from 'react-reveal/Flip';
import logo from '../../assets/images/logo.png';
import { GrFormNextLink } from "react-icons/gr";
import main2 from '../../assets/images/main2.png'
import diamond from '../../assets/images/diamond.svg'
import lock from '../../assets/images/lock.svg'
import software from '../../assets/images/software.png'
import capture1 from '../../assets/images/capture1.png'
import capture2 from '../../assets/images/capture2.png'
import capture3 from '../../assets/images/capture3.png'
import capture4 from '../../assets/images/capture4.png'
import capture5 from '../../assets/images/capture5.png'
import capture7 from '../../assets/images/capture7.png'
import software1 from '../../assets/images/software1.png'
import star from '../../assets/images/star.svg'
import star1 from '../../assets/images/start1.svg'
import feedbacki from '../../assets/images/feedback img.png'


const Main = () => {

    return (
        <>
        {/*/////=== Header page ===/////*/}
           <div className="header">
               <div className="main_nav">
                    <div className="container navigation">
                        <img src={logo} alt="photo" className="logo_main" />
                        <ul className='nav_ul'>
                            <li>Web App</li>
                            <li>Mobile App</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                            <li>Utility Pages</li>
                        </ul>
                        <button className="nav_btn" >Request A Demo</button>
                    </div>
               </div>
           
                <div className="container main_cont">
                <Fade top>
                    <h2>
                        All your business analytics in
                        a Single <span>Dashboard</span>
                    </h2>
                </Fade>
                <Slide left >
                    <button className="main_btn" >Get Started  <GrFormNextLink/> </button>

                </Slide>
                
                    
                </div>
           </div>
           {/*//// Perfect approach towards ////*/}

            <div className="main_perfect">
                <div className="container perfect">
                    <Zoom bottom>
                        <img src={main2} alt="photo" className="main2_img" />
                    </Zoom>

                    <div className="perfect_cont">
                        <div className="perfect_left">
                            <Fade bottom>
                                <h3>Perfect Approach Towards <span>Software</span></h3>
                                <p>It’s a social collaboration mail software platform that employees really love to use, with rich personalized interface helps to promote your product and connect with good buyer.</p>
                            </Fade>
                            <div className="perfect_left_btm">
                            <Rotate top left>
                                <div className="diamondp">
                                    <img src={diamond} alt="photo" />
                                    <div className="diamondp_txt">
                                        <h3>Increase Workflow</h3>
                                        <h4>Abilities taken within a multiple platforms</h4>
                                    </div>
                                </div>
                            </Rotate>
                            <Rotate top left>
                                <div className="lockp">
                                    <img src={lock} alt="photo" />
                                    <div className="diamondp_txt">
                                        <h3>Secured Structure</h3>
                                        <h4>Purpose oriented structures protect thedata</h4>
                                    </div>
                                </div>
                            </Rotate>
                            </div>
                        </div>
                        
                        <div className="perfect_right">
                            <Roll right>
                                <img src={software} alt="photo" />
                            </Roll>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/*///=== Capture & convert excellent leads ==///*/}

            <div className="main_capture">
                <div className="container">
                    <div className="capture_header">
                        
                        <Flip left cascade>
                        <div className="capture_header_left">
                            <h1>Capture & convert excellent leads</h1>
                            <h2>more easily.</h2>
                            <p>You can control the inbox like Turn Off Notifications, Choose When You Check In, Don’t Default to Email, Compose mail and reply the mail you want.</p>

                        </div>
                        </Flip>
                        <Rotate right>
                        <div className="capture_header_right">
                            <img src={capture1} alt="photo" />
                        </div>
                        </Rotate>
                    </div>
                <Fade left cascade>
                    <div className="capture_body">
                        <img src={capture2} alt="photo" className="capture2_img" />
                        <img src={capture3} alt="photo" className="capture3_img" />
                        <img src={capture4} alt="photo" className="capture2_img" />
                    </div>
                </Fade>
                <Fade left cascade>
                    <div className="capture_footer">
                        <div className="capture_foot">
                            <img src={capture5} alt="photo" />
                            <div className="fewa" >
                                <h2>Watch<br/> And Learn</h2>
                                <button>Explore App <GrFormNextLink/></button>
                            </div>
                        </div>
                        <div className="capture_footimg">
                            <img src={capture7} alt="photo" />
                        </div>
                    </div>
                </Fade>
                </div>
            </div>

            {/* software that drives employee */}

            <div className="main_software">
                <div className="container software">
                <Roll left>
                    <h1 className="ssh1">software that drives employee</h1>
                    <h2 className="ssh2">Engagement & productivity</h2>
                </Roll> 
                
                    <div className="software_both">
                    
                        <div className="software_left">
                        <Slide top>
                            <div className="software_left1">
                                <h2>Flexible & Powerful</h2>
                                <h3>Branding is the process of developing a company's brand, including name.</h3>
                            </div>
                        </Slide>   
                        <Slide top>
                            <div className="software_left2">
                                <h2>Simplified Workflow</h2>
                                <h3>Standard model of data storage in which the digital data and zip files are is stored.</h3>
                            </div>
                        </Slide> 
                        <Slide top>
                            <div className="software_left2">
                                <h2>Branded Scheduling</h2>
                                <h3>Workflow management system designed to compose and execute a series.</h3>
                            </div>
                        </Slide>
                        <Slide top>
                            <div className="software_left2">
                                <h2>Reporting Analytics</h2>
                                <h3>Activity related to selling or the amount of services sold in a given time period.</h3>
                            </div>
                        </Slide>
                        </div>
                    
                        <Rotate top right>
                            <div className="software_right">
                                <img src={software1} alt="photo" className="software1" />
                            </div>
                        </Rotate>
                    </div>
                    
                </div>
            </div>

            {/* Featured Feedback */}

            <div className="main_feedback">
                <div className="container feedback">
                    <div>
                        <div className="feedback_left">
                            <h1>Featured Feedback</h1>
                            <img src={star} alt="photo" />
                        </div>
                        <p>Spaatz helps us to build processes and automation into my business like a programmer without having to learn to code. My team is now using process to be more productive without even knowing it”</p>
                        <div className="rating">
                            <h3>Utility Tech</h3>
                            <h4>(4.5 / 5 Rating)</h4>
                            <div className="uti_starts">
                                <img src={star1} alt="photo" />
                                <img src={star1} alt="photo" />
                                <img src={star1} alt="photo" />
                                <img src={star1} alt="photo" />
                                <img src={star1} alt="photo" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="feedback_right">
                        <img src={feedbacki} alt="photo" />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Main;
