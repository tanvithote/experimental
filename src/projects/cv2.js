import React, { Component } from 'react';
import './cv1.css';
import Header from '../common/header';
import Footer from '../common/footer';
import Fall_Detection from '../images/Fall Detection.jpg';
import { FaUserGraduate } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

class Single_Project extends Component{
    render(){
        return(
            <div class="project-page">
                <Header/>
                <section class="portfolio-block project">
                    <div class="container">
                        <div class="heading">
                            <h2>Fall Detection System for the Elderly</h2>
                        </div>
                        <div class="image">
                        <img class="card-img-top project-image" src={Fall_Detection}></img>
                        </div>
                        <div class="row">
                            <div class="col-md-6 offset-md-1 info">
                                <h2 class="description">DESCRIPTION</h2>
                                <p class="project-paragaph">Elderly people frequently experience serious accidents
                                    such as falls which can be a cause of accidental or injury
                                    deaths. This calls for practical means to monitor them in
                                    order to detect falls and react urgently because a
                                    significant amount of time can pass before they receive
                                    assistance. Our real-time fall detection system is a
                                    feasible and accurate device comprising an embedded
                                    computer and camera. This device can be installed into
                                    walls or ceilings and monitor a room without human
                                    intervention. Furthermore, the people monitored at home
                                    are not required to wear devices. Thus, the system is
                                    capable of 24 h monitoring.</p>
                                <p class="project-paragaph">The system is based on artificial vision algorithms that
                                    monitor the presence of people in a room and detect if a
                                    person has fallen. When a fall is detected, an alarm
                                    message is sent to the caregivers along with the live
                                    stream of fallen person. If the person recovers, another
                                    message is sent. No other privacy information is
                                    exchanged.</p>
                                <p class="project-paragaph">The use of intelligent systems like ours in elderly patients’
                                homes (creating smart homes) improves their comfort,
                                safety and prevents depression and thus, will allow people
                                to extend their independent living years and reduce the
                                time required for caregivers to monitor their elders.</p>
                            </div>
                            <div class="col-md-4 offset-md-1 meta">
                                <div class="tags">
                                    <span class="meta-heading">Domain</span>
                                    <br/>
                                    <span class="text-muted">Computer Vision</span>
                                    <br/><br/>
                                    <span class="meta-heading">Collaborators</span>
                                    <div class="row ml-3 text-muted">
                                        <FaUserGraduate size={18} class="mr-4 mt-3" />
                                        <span class="mt-3">Mitanshu Bhoot, Sakshi Oswal, Saurabh Rane, Tarun Medtiya</span>                                        
                                    </div>
                                    {/* <div class="row ml-3 text-muted">
                                        <FaIndustry size={18} class="mr-3 mt-3" />
                                        <span class="mt-3">DriveBuddy AI</span>                                        
                                    </div> */}
                                    <div class="row ml-3 text-muted">
                                        <FaUniversity size={18} class="mr-3 mt-3" />
                                        <span class="mt-3">VIT</span>                                        
                                    </div>
                                    <div class="row ml-3 text-muted">
                                        <GiTeacher size={18} class="mr-3 mt-3" />
                                        <span class="mt-3">Milind Patwardhan, Aditya Purohit</span>                                        
                                    </div>
                                    <br/>
                                    <span class="meta-heading">Date</span><br/>
                                    <span class="text-muted">26/07/2020</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <Footer/>
            </div>

        );
    }
}

export default Single_Project;