import React, { Component } from 'react';
import './cv1.css';
import Header from '../common/header';
import Footer from '../common/footer';
import vehicle_classification from '../images/Vehicle Classification.jpg';
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
                            <h2>GTA 5 Car Detection using Convolution Neural Networks</h2>
                        </div>
                        <div class="image">
                        <img class="card-img-top project-image" src={vehicle_classification}></img>
                        </div>
                        <div class="row">
                            <div class="col-md-6 offset-md-1 info">
                                <h2 class="description">DESCRIPTION</h2>
                                <p class="project-paragaph">The main goal of the project is to design and test different types of neural networks for their efficiency in the development of autonomous vehicles. The dataset used for the development of these neural networks is from the game GTA 5, which comprises of thousands of images from the game with high definition graphics and high-resolution images. It also comprises of a vivid range of scenarios to improve the efficiency of the model.</p>
                                {/* <p class="project-paragaph">Lorem ipsum dapibus dolor non, malesuada mauris. Aliquam eleifend mauris non odio mattis auctor. Aenean sit amet elementum tellus, a facilisis ligula. Pellentesque ac vehicula mauris.</p> */}
                            </div>
                            <div class="col-md-4 offset-md-1 meta">
                                <div class="tags">
                                    <span class="meta-heading">Domain</span>
                                    <br/>
                                    <span class="text-muted">Computer Vision</span>
                                    <br/><br/>
                                    <span class="meta-heading">Collaborators</span>
                                    <div class="row ml-3 text-muted">
                                        <FaUserGraduate size={18} class="mr-3 mt-3" />
                                        <span class="mt-3">Purva Chaudhari, Atharva Dongare</span>                                        
                                    </div>
                                    {/* <div class="row ml-3 text-muted">
                                        <FaIndustry size={18} class="mr-3 mt-3" />
                                        <span class="mt-3">DriveBuddy AI</span>                                        
                                    </div> */}
                                    <div class="row ml-3 text-muted">
                                        <FaUniversity size={18} class="mr-3 mt-3"/>
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