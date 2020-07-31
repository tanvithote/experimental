import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return(
            <footer class="page-footer dark">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <h5 class="footer-heading">About Us</h5>
                            <ul class="footer-link">
                                <li class="footer-link"><a class="footer-link" href="#">Our Mission</a></li>
                                <li class="footer-link"><a class="footer-link" href="#">Projects</a></li>
                                <li class="footer-link"><a class="footer-link" href="#">Industry Partners</a></li>
                                <li class="footer-link"><a class="footer-link" href="#">University Partners</a></li>
                                <li class="footer-link"><a class="footer-link" href="#">Testimonials</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-4">
                            <h5 class="footer-heading">Projects</h5>
                            <ul class="footer-link">
                                <li class="footer-link"><a class="footer-link" href="#">Computer Vision</a></li>
                                <li class="footer-link"><a class="footer-link" href="#">Electric Vehicle</a></li>
                                <li class="footer-link"><a class="footer-link" href="#">Robotics and Path Planning</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-4">
                            <h5 class="footer-heading">Contact Us</h5>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <p class="copyright-text">© 2020 CRDF</p>
                </div>
            </footer>
        );
    }
}

export default Footer;