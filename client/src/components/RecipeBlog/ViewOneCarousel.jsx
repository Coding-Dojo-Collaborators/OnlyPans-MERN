/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Carousel } from 'react-bootstrap';
import random1 from '../static/images/random/random1.jpg';
import random2 from '../static/images/random/random2.jpg';
import random3 from '../static/images/random/random3.jpg';
import random4 from '../static/images/random/random4.jpg';
import random5 from '../static/images/random/random5.jpg';
import random6 from '../static/images/random/random6.jpg';
import random7 from '../static/images/random/random7.jpeg';
import random8 from '../static/images/random/random8.jpg';
import random9 from '../static/images/random/random9.png';
import random10 from '../static/images/random/random10.jpg';
import random11 from '../static/images/random/random11.jpg';
import random12 from '../static/images/random/random12.jpg';
import random13 from '../static/images/random/random13.jpg';
import random14 from '../static/images/random/random14.jpg';

export default () => {
  return (
    <div className='carousel'>
      <Carousel prevIcon={
        <span aria-hidden="true" className="carousel-control-prev-icon" />}>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={random1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={random2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={random3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={random4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={random5}
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={random6}
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={random7}
            alt="Seventh slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={random8}
            alt="Eighth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={random9}
            alt="Ninth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={random10}
            alt="Tenth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={random11}
            alt="Eleventh slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={random12}
            alt="Twelvth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={random13}
            alt="Thirteenth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={random14}
            alt="Fourteenth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};