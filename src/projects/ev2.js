import React, { Component } from 'react';
import './cv1.css';
import Header from '../common/header';
import Footer from '../common/footer';
import busbar from '../images/busbar.png';
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
                            <h2>Optimizing the Sizing of Busbar</h2>
                        </div>
                        <div class="image">
                        <img class="card-img-top project-image" src={busbar}></img>
                        </div>
                        <div class="row">
                            <div class="col-md-6 offset-md-1 info">
                                <h2 class="description">DESCRIPTION</h2>
                                <p class="project-paragaph">The project is basically about optimizing the sizing of the busbar to reduce the wastage of material and achieving the above mentioned objectives.  Busbars are astonishing pieces of technology that make complex power distribution simpler, more affordable and flexible. In electric power distribution, a busbar is a metallic strip or bar for local high current power distribution. It is a type of an electrical junction in which all the incoming and outgoing electrical currents meet.</p>
                                <p class="project-paragaph">The scope of this project aims at detailed study of busbars, heat transfers from the busbar and its enclosures. The calculations are executed using the Microsoft Excel and its various functions. Further scope of this project is to create a GUI (Graphic User Interface) for ease of handling. </p>
                            </div>
                            <div class="col-md-3 offset-md-1 meta">
                                <div class="tags">
                                    <span class="meta-heading">Domain</span>
                                    <br/>
                                    <span class="text-muted">Electric Vehicle</span>
                                    <br/><br/>
                                    <span class="meta-heading">Collaborators</span>
                                    <div class="row ml-3 text-muted">
                                        <FaUserGraduate size={18} class="mr-3 mt-3" />
                                        <span class="mt-3">Kajol Ghatole, Mayura Ghatti</span>                                        
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