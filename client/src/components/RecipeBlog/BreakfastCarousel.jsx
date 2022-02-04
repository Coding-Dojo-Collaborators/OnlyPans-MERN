/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Carousel } from 'react-bootstrap';
import breakfast1 from '../static/images/breakfast/breakfast1.jpg';
import breakfast2 from '../static/images/breakfast/breakfast2.jpg';
import breakfast3 from '../static/images/breakfast/breakfast3.jpg';
import breakfast4 from '../static/images/breakfast/breakfast4.jpg';
import breakfast5 from '../static/images/breakfast/breakfast5.jpg';
import breakfast6 from '../static/images/breakfast/breakfast6.jpg';
import breakfast7 from '../static/images/breakfast/breakfast7.jpg';
import breakfast8 from '../static/images/breakfast/breakfast8.jpg';
import breakfast9 from '../static/images/breakfast/breakfast9.jpg';
import breakfast10 from '../static/images/breakfast/breakfast10.jpg';
import breakfast11 from '../static/images/breakfast/breakfast11.jpg';
import breakfast12 from '../static/images/breakfast/breakfast12.jpg';

export default () => {
  return (
    <div className='carousel'>
      <Carousel prevIcon={
        <span aria-hidden="true" className="carousel-control-prev-icon" />}>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={breakfast1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={breakfast2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={breakfast3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={breakfast4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={breakfast5}
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={breakfast6}
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={breakfast7}
            alt="Seventh slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={breakfast8}
            alt="Eighth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={breakfast9}
            alt="Ninth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={breakfast10}
            alt="Tenth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={breakfast11}
            alt="Eleventh slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={breakfast12}
            alt="Twelvth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};