import React, { Component } from 'react';
import './Home.css';
import Header from '../common/header';
import home_image from '../images/Picture1.png';
import Carousel2 from './carousel2';
// import Carousel1 from './carousel1';
import Carousel3 from './carousel3';
import devise from '../images/devise.png';
import drive from '../images/drivebuddy.png';
import VIT from '../images/VIT.png';
import MIT from '../images/MIT.png';
import Testimonials from './testimonials';
import Footer from '../common/footer';


class Home extends Component {

  render() {
    return (
        <div>
          <Header/>
          <section class="about">
              <div class="row">
                <div class="col-md-8 text-center">
                    <h1 class="about_heading">COLLABORATIVE RESEARCH AND DEVELOPMENT FORUM</h1>
                    <p class="tagline">"Innovation through Collaboration"</p>
                    <p class="home-text">CRDF is a platform for collaboration for industries, professors, international graduates and college students to solve challenging problems in technology and research.</p>
                    <a href="/about"><button class="about-button"><span>Know more</span></button></a>
                </div>
                <div class="col-md-4 text-center">
                    <img class="home_image" src={home_image} alt="about_crdf" width="300" height="300"></img>
                </div>
              </div>
          </section>
          <section class="projects">
            <h1 class="projects_heading">PROJECTS</h1>
            <div class="carousel">
            <Carousel3/>
            </div>
          </section>
          <section class="industry-partners">
            <h1 class="industry_heading">INDUSTRY PARTNERS</h1>
            <div class="row industry-row">
                <a class="image-link" href="https://www.deviseelectronics.com/" target="_blank">
                <img class="center-block" src={devise} alt="devise electronics logo" height="150" width="300" ></img>
                </a>
                <a class="image-link" href="https://drivebuddyai.com/" target="_blank">
                <img class="center-block" src={drive} alt="drive buddy logo" height="150" width="300"></img>
                </a>
            </div>
            <a href="/contact"><button class="industry-button hover" data-hover="We'd love to work with you!"><div>Become a Partner</div></button></a>
          </section>
          <section class="university-partners">
          <h1 class="university_heading">UNIVERSITY PARTNERS</h1>
            <div class="row industry-row">
                <a class="image-link" href="http://www.vit.edu/" target="_blank">
                <img class="center-block" src={VIT} alt="VIT" height="200" width="250" ></img>
                </a>
                <a class="image-link" href="http://www.mitpune.com/" target="_blank">
                <img class="center-block" src={MIT} alt="MIT" height="200" width="200"></img>
                </a>
            </div>
            <a href="/contact"><button class="university-button hover" data-hover="We'd love to work with you!"><div>Become a Partner</div></button></a>
            {/* <button class="university-button hvr-grow">Become a Partner</button> */}
          </section>
          <section class="testimonials">
          <h1 class="testimonials_heading">TESTIMONIALS</h1>
          <Testimonials/>
          </section>
          <Footer/>
        </div>
    
    );
  }
}

export default Home;
