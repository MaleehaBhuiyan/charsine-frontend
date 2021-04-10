import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import HomeSlideImg1 from '../images/home-slide-img-1.jpg'
import HomeSlideImg2 from '../images/home-slide-img-2.jpg'
import HomeSlideImg3 from '../images/home-slide-img-3.jpg'

const slideImages = [
    HomeSlideImg1,
    HomeSlideImg2,
    HomeSlideImg3
];



const HomepageSlideshow = () => {
    return (
      <div className="home-slide-container">
        <Slide>
          <div className="home-each-slide" style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <div>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="home-each-slide" style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <div>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="home-each-slide" style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <div>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default HomepageSlideshow

