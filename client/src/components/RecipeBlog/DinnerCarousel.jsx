/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Carousel } from 'react-bootstrap';
import dinner1 from '../static/images/dinner/dinner1.jpg';
import dinner2 from '../static/images/dinner/dinner2.jpg';
import dinner3 from '../static/images/dinner/dinner3.jpg';
import dinner4 from '../static/images/dinner/dinner4.jpg';
import dinner5 from '../static/images/dinner/dinner5.jpg';
import dinner6 from '../static/images/dinner/dinner6.jpg';
import dinner7 from '../static/images/dinner/dinner7.jpg';
import dinner8 from '../static/images/dinner/dinner8.jpg';
import dinner9 from '../static/images/dinner/dinner9.jpg';
import dinner10 from '../static/images/dinner/dinner10.jpg';
import dinner11 from '../static/images/dinner/dinner11.jpg';

export default () => {
  return (
    <div className='carousel'>
      <Carousel prevIcon={
        <span aria-hidden="true" className="carousel-control-prev-icon" />}>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={dinner1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={dinner2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={dinner3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={dinner4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={dinner5}
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={dinner6}
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={dinner7}
            alt="Seventh slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={dinner8}
            alt="Eighth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={dinner9}
            alt="Ninth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={dinner10}
            alt="Tenth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={dinner11}
            alt="Eleventh slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};