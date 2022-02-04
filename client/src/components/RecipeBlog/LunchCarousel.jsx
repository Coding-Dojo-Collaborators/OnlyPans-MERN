/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Carousel } from 'react-bootstrap';
import lunch1 from '../static/images/lunch/lunch1.jpg';
import lunch2 from '../static/images/lunch/lunch2.jpg';
import lunch3 from '../static/images/lunch/lunch3.jpg';
import lunch4 from '../static/images/lunch/lunch4.jpg';
import lunch5 from '../static/images/lunch/lunch5.jpg';
import lunch6 from '../static/images/lunch/lunch6.jpg';
import lunch7 from '../static/images/lunch/lunch7.jpg';
import lunch8 from '../static/images/lunch/lunch8.jpg';
import lunch9 from '../static/images/lunch/lunch9.jpg';
import lunch10 from '../static/images/lunch/lunch10.jpg';
import lunch11 from '../static/images/lunch/lunch11.jpg';
import lunch12 from '../static/images/lunch/lunch12.jpg';
import lunch13 from '../static/images/lunch/lunch13.jpg';
import lunch14 from '../static/images/lunch/lunch14.jpg';
import lunch15 from '../static/images/lunch/lunch15.jpg';
import lunch16 from '../static/images/lunch/lunch16.jpg';

export default () => {
  return (
    <div className='carousel'>
      <Carousel prevIcon={
        <span aria-hidden="true" className="carousel-control-prev-icon" />}>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={lunch1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={lunch2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={lunch3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={lunch4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={lunch5}
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={lunch6}
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={lunch7}
            alt="Seventh slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={lunch8}
            alt="Eighth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={lunch9}
            alt="Ninth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={lunch10}
            alt="Tenth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={lunch11}
            alt="Eleventh slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={lunch12}
            alt="Twelvth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={lunch13}
            alt="Thirteenth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={lunch14}
            alt="Fourteenth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={lunch15}
            alt="Fifteenth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={lunch16}
            alt="Sixteenth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};