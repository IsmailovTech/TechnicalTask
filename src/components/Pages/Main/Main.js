import React from 'react';
import './Main.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import Roll from 'react-reveal/Roll';
import Flip from 'react-reveal/Flip';
import logo from '../../assets/images/logo.png';
import logofoot from '../../assets/images/logofoot.svg';
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
import brands from '../../assets/images/brands.png'
import cards1 from '../../assets/images/cards1.png'
import cards2 from '../../assets/images/cards2.png'
import cards3 from '../../assets/images/cards3.png'

import avatar1 from '../../assets/images/avatar1.png'
import avatar2 from '../../assets/images/avatar2.png'
import avatar3 from '../../assets/images/avatar3.png'
import unleash from '../../assets/images/unleash.png'
import footerimg from '../../assets/images/footerimg.png'

import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

import { ImTelegram } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";



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

            {/* Loved by teams around the world */}

            <div className="main_loved">
                <div className="container">
                    <div className="brands">
                        <p className="brands_p" >Loved by teams around the world</p>
                        <img src={brands} alt="photo" className="brands_img" />
                    </div>

                    <div className="Cards-main">
                      <div className="card1">
                          <img src={cards1} alt="photo" className="cards1_img" />
                          <p className="card1_p" >Young startups with Spaatz In Full Throttle</p>
                          <p className="card1_p2">Capitalize on low-hanging fruit to identify a ballpark value added activity to beta test override the digital divide with DevOps.</p>
                          <CardHeader
                                avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    <img src={avatar1} alt="photo" />
                                </Avatar>
                                }
                                title="Antony Wills"
                                subheader="December 22, 2021 . Entertainment"
                                className="cardherader"
                            />
                      </div>

                      <div className="card1">
                          <img src={cards2} alt="photo" className="cards1_img" />
                          <p className="card1_p" >How to Choose A Tech Stack for Your Startup</p>
                          <p className="card1_p2">Strategies on low-hanging fruit to identify a ballpark value added activity to beta test override the digital divide with DevOps.</p>
                          <CardHeader
                                avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    <img src={avatar2} alt="photo" />
                                </Avatar>
                                }
                                title="Natalia Tena"
                                subheader="December 22, 2021 . Lifestyle"
                                className="cardherader"
                            />
                      </div>

                      <div className="card1">
                          <img src={cards3} alt="photo" className="cards1_img" />
                          <p className="card1_p" >More Powerful, Polished Spaatz for Android    </p>
                          <p className="card1_p2">Collaborative on low-hanging fruit to identify a ballpark value added activity to beta test override the digital form of the divide.</p>
                          <CardHeader
                                avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    <img src={avatar3} alt="photo" />
                                </Avatar>
                                }
                                title="John Methow"
                                subheader="December 24, 2021 . Productivity"
                                className="cardherader"
                            />
                      </div>

                    </div>
                     <div className="btn_center" ><button className="more_btn" >More Blogs</button></div>
                    
                    <div className="unleash_main">
                        <p>Unleash your growth potential</p>
                        <button className="nav_btn" >Request Demo <GrFormNextLink/></button>
                    </div>
                    
                    <img src={unleash} alt="photo" className="unleash_img" />
                </div>
            </div>
            <div className="main_footer">
                <div className="container footer">
                            <div className="footer1">
                                <div className="footer_left">
                                    <img src={logofoot} alt="photo" />
                                    <p className="footer_leftp">Spaatz is a professional yet creative dashboard for organize your business.</p>
                                     <div className="footer_icons">
                                     <ImTelegram class="icon_social telegram" />
                                     <AiFillInstagram class="icon_social instagram" />
                                     <ImYoutube class="icon_social youtube" />
                                     <ImTwitter class="icon_social twitter" />
                                     </div>
                                </div>
                                <div className="footer_middle">
                                    <ul className="footer_middle_nav">
                                        <p className="nav_txt" >Explore</p>
                                        <li>Web App</li>
                                        <li>Mobile App</li>
                                        <li>Blog</li>
                                        <li>Contact</li>
                                        <li>Demo</li>
                                    </ul>
                                    <ul className="footer_middle_nav">
                                        <p className="nav_txt" >Utility</p>
                                        <li>Licenses</li>
                                        <li>Style Guide</li>
                                        <li>Change Log</li>
                                        <li>Protected</li>
                                        <li>Not Found</li>
                                    </ul>
                                    <ul className="footer_middle_nav">
                                        <p className="nav_txt" >Category</p>
                                        <li>Lifestyle</li>
                                        <li>Productivity</li>
                                        <li>Social Media</li>
                                        <li>Entertain</li>
                                        <li>Creative</li>
                                    </ul>
                                </div>
                                <div className="footer_right">
                                    <img src={footerimg} alt="photo" />
                                </div>
                            </div>
                            
                            <div className="footer2">
                                    <hr className="footer2_line"/>
                                <div className="licence">
                                    <p>Spaatz © 2022. Designed by <span>Victorflow</span> - Powered by <span>Webflow</span></p>
                                    <p>Entertainment / Lifestyle / Productivity / Social Media</p>
                                </div>
                            </div>
                </div>
            </div>
        </>
    );
}

export default Main;
