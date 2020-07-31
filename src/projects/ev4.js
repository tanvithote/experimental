import React, { Component } from 'react';
import './cv1.css';
import Header from '../common/header';
import Footer from '../common/footer';
import bms from '../images/1.jpg';
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
                            <h2>Design and development of Protection Circuit Module (BMS)</h2>
                        </div>
                        <div class="image">
                        <img class="card-img-top project-image" src={bms}></img>
                        </div>
                        <div class="row">
                            <div class="col-md-6 offset-md-1 info">
                                <h2 class="description">DESCRIPTION</h2>
                                <p class="project-paragaph">Every rechargeable cell needs a protection circuit module or a battery management system depending upon the complexity of the application.in order to ensure the safety as well as for preserving the life cycle of the cell.</p>
                                <p class="project-paragaph">We plan to make a standard PCM for 3/4 cells connected in series which is capable of cutting-off the cell discharging during undervoltage & overcurrent conditions and also shutdown the charging circuit during overvoltage conditions. The product will be designed to work within a specific temperature range and will optimize battery performance. Cost will be a major constraint so that it will be able to compete with similar products in the market.</p>
                                <p class="project-paragaph">The future scope of this project would be to integrate Cell balancing as well as State of Charge (SoC) / State of Health (SoH) determination.</p>
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
                                        <span class="mt-3">Harshad Honwad, Abhijit Roy, Siddhesh Mehta, Apoorv Satpute</span>                                        
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
                                        <span class="mt-3">Aditya Purohit, Shubham Agnihotri</span>                                        
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