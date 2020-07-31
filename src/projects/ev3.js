import React, { Component } from 'react';
import './cv1.css';
import Header from '../common/header';
import Footer from '../common/footer';
import pin from '../images/6pin.png';
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
                            <h2>Design and development of IP68 6 pin connector</h2>
                        </div>
                        <div class="image">
                        <img class="card-img-top project-image" src={pin}></img>
                        </div>
                        <div class="row">
                            <div class="col-md-6 offset-md-1 info">
                                <h2 class="description">DESCRIPTION</h2>
                                <p class="project-paragaph">The project is about optimizing the design of the connector and achieve the project goals and development a connector which is will sustain and work properly underwater.The most challenging part of the project was to brainstorm and achieve ip68 rating with the help of different design patterns,materials and to decode the manufacturing process for the design considering all the INDIAN standards.</p>
                                {/* <p class="project-paragaph">Lorem ipsum dapibus dolor non, malesuada mauris. Aliquam eleifend mauris non odio mattis auctor. Aenean sit amet elementum tellus, a facilisis ligula. Pellentesque ac vehicula mauris.</p> */}
                            </div>
                            <div class="col-md-4 offset-md-1 meta">
                                <div class="tags">
                                    <span class="meta-heading">Domain</span>
                                    <br/>
                                    <span class="text-muted">Electric Vehicle</span>
                                    <br/><br/>
                                    <span class="meta-heading">Collaborators</span>
                                    <div class="row ml-3 text-muted">
                                        <FaUserGraduate size={18} class="mr-3 mt-3" />
                                        <span class="mt-3">Ashish Madke, Rajat Vyavhare</span>                                        
                                    </div>
                                    <div class="row ml-3 text-muted">
                                        <FaIndustry size={18} class="mr-3 mt-3" />
                                        <span class="mt-3">Devise Electronics</span>                                        
                                    </div>
                                    <div class="row ml-3 text-muted">
                                        <FaUniversity size={18} class="mr-3 mt-3" />
                                        <span class="mt-3">MIT</span>                                        
                                    </div>
                                    <div class="row ml-3 text-muted">
                                        <GiTeacher size={18} class="mr-3 mt-3" />
                                        <span class="mt-3">Shubham Agnihotri</span>                                        
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