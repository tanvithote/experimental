import React, { Component } from 'react';
import './carousel2.css';
import $ from "jquery";

class Carousel2 extends Component {
    componentDidMount() {
        $(document).ready(function() {
  
            var $slider = $(".slider"),
                $slideBGs = $(".slide__bg"),
                diff = 0,
                curSlide = 0,
                numOfSlides = $(".slide").length-1,
                animating = false,
                animTime = 500,
                autoSlideTimeout,
                autoSlideDelay = 6000,
                $pagination = $(".slider-pagi");
            
            function createBullets() {
              for (var i = 0; i < numOfSlides+1; i++) {
                var $li = $("<li class='slider-pagi__elem'></li>");
                $li.addClass("slider-pagi__elem-"+i).data("page", i);
                if (!i) $li.addClass("active");
                $pagination.append($li);
              }
            };
            
            createBullets();
            
            function manageControls() {
              $(".slider-control").removeClass("inactive");
              if (!curSlide) $(".slider-control.left").addClass("inactive");
              if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
            };
            
            function autoSlide() {
              autoSlideTimeout = setTimeout(function() {
                curSlide++;
                if (curSlide > numOfSlides) curSlide = 0;
                changeSlides();
              }, autoSlideDelay);
            };
            
            autoSlide();
            
            function changeSlides(instant) {
              if (!instant) {
                animating = true;
                manageControls();
                $slider.addClass("animating");
                $slider.css("top");
                $(".slide").removeClass("active");
                $(".slide-"+curSlide).addClass("active");
                setTimeout(function() {
                  $slider.removeClass("animating");
                  animating = false;
                }, animTime);
              }
              window.clearTimeout(autoSlideTimeout);
              $(".slider-pagi__elem").removeClass("active");
              $(".slider-pagi__elem-"+curSlide).addClass("active");
              $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
              $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
              diff = 0;
              autoSlide();
            }
          
            function navigateLeft() {
              if (animating) return;
              if (curSlide > 0) curSlide--;
              changeSlides();
            }
          
            function navigateRight() {
              if (animating) return;
              if (curSlide < numOfSlides) curSlide++;
              changeSlides();
            }
          
            $(document).on("mousedown touchstart", ".slider", function(e) {
              if (animating) return;
              window.clearTimeout(autoSlideTimeout);
              var startX = e.pageX || e.originalEvent.touches[0].pageX,
                  winW = $(window).width();
              diff = 0;
              
              $(document).on("mousemove touchmove", function(e) {
                var x = e.pageX || e.originalEvent.touches[0].pageX;
                diff = (startX - x) / winW * 70;
                if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
                $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
                $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
              });
            });
            
            $(document).on("mouseup touchend", function(e) {
              $(document).off("mousemove touchmove");
              if (animating) return;
              if (!diff) {
                changeSlides(true);
                return;
              }
              if (diff > -8 && diff < 8) {
                changeSlides();
                return;
              }
              if (diff <= -8) {
                navigateLeft();
              }
              if (diff >= 8) {
                navigateRight();
              }
            });
            
            $(document).on("click", ".slider-control", function() {
              if ($(this).hasClass("left")) {
                navigateLeft();
              } else {
                navigateRight();
              }
            });
            
            $(document).on("click", ".slider-pagi__elem", function() {
              curSlide = $(this).data("page");
              changeSlides();
            });
            
          });
    }
    render(){
        return (
            <div class="slider-container">
                <div class="slider-control left inactive"></div>
                <div class="slider-control right"></div>
                <ul class="slider-pagi"></ul>
                <div class="slider">
                    <div class="slide slide-0 active">
                    <div class="slide__bg"></div>
                    <div class="slide__content">
                        <svg class="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                        <path class="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                        </svg>
                        <div class="slide__text">
                        <h2 class="slide__text-heading">Unique Insights</h2>
                        </div>
                    </div>
                    </div>
                    <div class="slide slide-1 ">
                    <div class="slide__bg"></div>
                    <div class="slide__content">
                        <svg class="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                        <path class="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                        </svg>
                        <div class="slide__text">
                        <h2 class="slide__text-heading">Affordable Prices</h2>
                        </div>
                    </div>
                    </div>
                    <div class="slide slide-2">
                    <div class="slide__bg"></div>
                    <div class="slide__content">
                        <svg class="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                        <path class="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                        </svg>
                        <div class="slide__text">
                        <h2 class="slide__text-heading">One Call Away</h2>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        )
    }
}

export default Carousel2;