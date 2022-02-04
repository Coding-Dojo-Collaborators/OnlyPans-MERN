/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Carousel } from 'react-bootstrap';
import quick1 from '../static/images/quick/quick1.jpg';
import quick2 from '../static/images/quick/quick2.jpg';
import quick3 from '../static/images/quick/quick3.jpg';
import quick4 from '../static/images/quick/quick4.jpg';
import quick5 from '../static/images/quick/quick5.jpg';
import quick6 from '../static/images/quick/quick6.jpg';
import quick7 from '../static/images/quick/quick7.jpg';
import quick8 from '../static/images/quick/quick8.jpg';
import quick9 from '../static/images/quick/quick9.jpg';
import quick10 from '../static/images/quick/quick10.jpg';
import quick11 from '../static/images/quick/quick11.jpg';
import quick12 from '../static/images/quick/quick12.jpg';

export default () => {
  return (
    <div className='carousel'>
      <Carousel prevIcon={
        <span aria-hidden="true" className="carousel-control-prev-icon" />}>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={quick1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={quick2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={quick3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={quick4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={quick5}
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={quick6}
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={quick7}
            alt="Seventh slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={quick8}
            alt="Eighth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={quick9}
            alt="Ninth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={quick10}
            alt="Tenth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={quick11}
            alt="Eleventh slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={quick12}
            alt="Twelvth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};