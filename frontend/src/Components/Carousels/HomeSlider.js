import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

import './HomeSlider.css'
export default class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };
    
    return (
      <div>
        <Slider {...settings}>
          <div>
          <img src= './assests/Homepage-Banner-0-Christmas.png' width="auto" height="500px"alt='Homepage-Banner-0'/>
          </div>
          <div>
          <img src= './assests/Homepage-Banner-1.png' width="auto" height="500px"alt='Homepage-Banner-1'/>
          </div>
          <div>
          <img src= './assests/Homepage-Banner-2.png' width="auto" height="500px"alt='Homepage-Banner-2'/>
          </div>
        </Slider>
      </div>
    );
  }
}