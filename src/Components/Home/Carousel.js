import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Carprop";
import classes from './Carprop.module.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/*





import img1 from "./../../Assets/ss1.jpg";
import img2 from "./../../Assets/ss2.jpg";
import img3 from "./../../Assets/ss3.jpg"; 
import img4 from "./../../Assets/ss4.jpg";
import img5 from "./../../Assets/ss5.jpg";




import img1 from "./../../Assets/ud1.png";
import img2 from "./../../Assets/ud2.png";
import img3 from "./../../Assets/ud3.png"; 
import img4 from "./../../Assets/ud4.png";
import img5 from "./../../Assets/ud5.png";




import img1 from "./../../Assets/dd.png";
import img2 from "./../../Assets/b2.png";
import img3 from "./../../Assets/b3.png"; 
import img4 from "./../../Assets/b4.png";
import img5 from "./../../Assets/ud5.png";*/


import img1 from "./../../Asset/slide1.webp";
import img2 from "./../../Asset/slide2.webp";
import img3 from "./../../Asset/slide3.webp";
import img4 from "./../../Asset/slide4.webp";
import img5 from "./../../Asset/slide5.webp";

export default class Carousel extends Component {
    render() {
      const settings = {
  
        dots: false,
        fade: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,    
    };
      return (
        <div>
        
          <Slider {...settings} className={classes.bbs}>
           
            <div>
            <Card img={img1}></Card>
            </div>

            <div>
            <Card img={img2}></Card>
            </div>

            <div>
            <Card img={img3}></Card>
            </div>

            <div>
            <Card img={img4}></Card>
            </div>

            <div>
            <Card img={img5}></Card>
            </div>

          </Slider>
        </div>
      );
    }
  }