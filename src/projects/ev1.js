import React, { Component } from 'react';
import './cv1.css';
import Header from '../common/header';
import Footer from '../common/footer';
import pcb from '../images/pcb.png';
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
                            <h2>Reduction of vibrations in PCB of an Electric Vehicle</h2>
                        </div>
                        <div class="image">
                        <img class="card-img-top project-image" src={pcb}></img>
                        </div>
                        <div class="row">
                            <div class="col-md-6 offset-md-1 info">
                                <h2 class="description">DESCRIPTION</h2>
                                <p class="project-paragaph">The project aims to study vibrations as a critical mode of failure under dynamic loading of PCB. Any mechanical system experiences differing levels of vibrations and hence keeping in mind the reliability, It is important to study how these systems behave in a vibrating environment.</p>
                                <p class="project-paragaph">PCB are an essential component in an Automobile and also in any other electro-mechanical system. Automobiles experience vibrations through many external as well as internal agents and hence we consider random vibrations account for all sources of vibrations as it has been observed that almost 20% of the total failures in PCB are due to vibrations. Modal Analysis and Harmonic Response are the major simulations conducted for the PCB’s under vibration.</p>
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
                                        <span class="mt-3">Karan Bhadri, Pradeep Goswal</span>                                        
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