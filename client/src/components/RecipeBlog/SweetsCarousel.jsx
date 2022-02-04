/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Carousel } from 'react-bootstrap';
import sweets1 from '../static/images/sweets/sweets1.jpg';
import sweets2 from '../static/images/sweets/sweets2.jpg';
import sweets3 from '../static/images/sweets/sweets3.jpg';
import sweets4 from '../static/images/sweets/sweets4.jpg';
import sweets5 from '../static/images/sweets/sweets5.jpg';
import sweets6 from '../static/images/sweets/sweets6.jpg';
import sweets7 from '../static/images/sweets/sweets7.jpg';
import sweets8 from '../static/images/sweets/sweets8.jpg';
import sweets9 from '../static/images/sweets/sweets9.jpg';
import sweets10 from '../static/images/sweets/sweets10.jpg';
import sweets11 from '../static/images/sweets/sweets11.jpg';

export default () => {
  return (
    <div className='carousel'>
      <Carousel prevIcon={
        <span aria-hidden="true" className="carousel-control-prev-icon" />}>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={sweets1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={sweets2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={sweets3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={sweets4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={sweets5}
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={sweets6}
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={sweets7}
            alt="Seventh slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={sweets8}
            alt="Eighth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={sweets9}
            alt="Ninth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={sweets10}
            alt="Tenth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={sweets11}
            alt="Eleventh slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};