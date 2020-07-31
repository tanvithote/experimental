import React, { Component } from 'react';
import './cv1.css';
import Header from '../common/header';
import Footer from '../common/footer';
import robotic from '../images/robotic.PNG';
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
                            <h2>Development of open-source haptic robotic arm</h2>
                        </div>
                        <div class="image">
                        <img class="card-img-top project-image" src={robotic}></img>
                        </div>
                        <div class="row">
                            <div class="col-md-6 offset-md-1 info">
                                <h2 class="description">DESCRIPTION</h2>
                                <p class="project-paragaph">We are creating an open-source resource for a robotic arm with ‘n’ degrees of freedom. The user
will be capable of using it for up to 9 degrees of freedom, thanks to the modular functions. There will
be forward &amp; inverse kinematic simulation used. Also, there will be modular programming in play
making it capable of complex functions. This will be achieved by the use of various components such
as IMU, pot meter, and servos.</p>
                                <p class="project-paragaph">The various aspects that are being covered in this are Robotic motion for which forward and inverse
kinematics is put to use along with the use of jacobian matrices. virtual environment for which ROS
and Rviz are being used as a simulation platform. URDF file for variable parameters is being used.
Failsafe conditions will cover mechanical/human errors, this will be taken care of by the various
sensors being implemented. An IMU is interfaced with a microcontroller to feed the sensor data to it
for forward and inverse kinematic solution of the robotic arm. The potentiometer will be employed
to remotely control the robotic arm with the motion of the user’s arm. Additionally, functions for
intuitive control are also to be implemented to exceed the limitation of movements of the human
hand.</p>
                            </div>
                            <div class="col-md-3 offset-md-1 meta">
                                <div class="tags">
                                    <span class="meta-heading">Domain</span>
                                    <br/>
                                    <span class="text-muted">Robotics and Path Planning</span>
                                    <br/><br/>
                                    <span class="meta-heading">Collaborators</span>
                                    <div class="row ml-3 text-muted">
                                        <FaUserGraduate size={18} class="mr-3 mt-3" />
                                        <span class="mt-3">Swapnil Mane, Prajakta Shinde, Nikhil Rathod, Nikhil Shinde, Parth Tulapurkar, Anuprita Kaple</span>                                        
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
                                        <span class="mt-3">Atharv Sathe</span>                                        
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