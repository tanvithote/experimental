import React, { Component } from 'react';
import './testimonials.css';
import { FaQuoteLeft } from 'react-icons/fa';

class Testimonials extends Component {
    render() {
        return(
    <div class="testimonials text-center container">
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="card border-light bg-light text-center" style={{height:"35em"}}>
            <i class="fa fa-quote-left fa-3x card-img-top rounded-circle" aria-hidden="true"><FaQuoteLeft size={50}/></i>
            <div class="card-body blockquote">
              <p class="card-text">The opportunity of getting to work on a research-based project in collaboration with Devise Electronics through CRDF was a valuable experience. CRDF has given a chance to work on real-life problem statements and apply our theoretical knowledge practically.</p>
              <footer class="blockquote-footer"><cite title="Source Title">Kajol Ghatole</cite></footer>
              {/* <footer class="blockquote-footer"><cite title="Source Title">CRDF Project Intern</cite></footer> */}
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card border-light bg-light text-center" style={{height:"35em"}}>
            <i class="fa fa-quote-left fa-3x card-img-top rounded-circle" aria-hidden="true"><FaQuoteLeft size={50}/></i>
            <div class="card-body blockquote">
              <p class="card-text">Mentoring the teams was a rewarding experience for me as our discussions gave rise to new ideas and a continuous exchange of knowledge. Additionally, CRDF has provided me a great platform to network and build strong relations with like-minded undergraduate and graduate students as well as industry professionals, in my domain.</p>
              <footer class="blockquote-footer"><cite title="Source Title">Samarth Kalluraya</cite></footer>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card border-light bg-light text-center" style={{height:"35em"}}>
            <i class="fa fa-quote-left fa-3x card-img-top rounded-circle" aria-hidden="true"><FaQuoteLeft size={50}/></i>
            <div class="card-body blockquote">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus</p>
              <footer class="blockquote-footer"><cite title="Source Title">Mohamed Atef</cite></footer>
            </div>
          </div>
        </div>

      </div>
    </div>

        );
    }
}

export default Testimonials;