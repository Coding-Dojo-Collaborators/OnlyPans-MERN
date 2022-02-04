/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Carousel } from 'react-bootstrap';
import fancy1 from '../static/images/fancy/fancy1.jpg';
import fancy2 from '../static/images/fancy/fancy2.jpg';
import fancy3 from '../static/images/fancy/fancy3.jpg';
import fancy4 from '../static/images/fancy/fancy4.jpg';
import fancy5 from '../static/images/fancy/fancy5.jpg';
import fancy6 from '../static/images/fancy/fancy6.png';
import fancy7 from '../static/images/fancy/fancy7.jpg';
import fancy8 from '../static/images/fancy/fancy8.jpg';
import fancy9 from '../static/images/fancy/fancy9.jpg';
import fancy10 from '../static/images/fancy/fancy10.jpg';
import fancy11 from '../static/images/fancy/fancy11.jpg';
import fancy12 from '../static/images/fancy/fancy12.jpg';
import fancy13 from '../static/images/fancy/fancy13.jpg';
import fancy14 from '../static/images/fancy/fancy14.jpg';
import fancy15 from '../static/images/fancy/fancy15.jpg';
import fancy16 from '../static/images/fancy/fancy16.jpg';

export default () => {
  return (
    <div className='carousel'>
      <Carousel prevIcon={
        <span aria-hidden="true" className="carousel-control-prev-icon" />}>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={fancy1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={fancy2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={fancy3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={fancy4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={fancy5}
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={fancy6}
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={fancy7}
            alt="Seventh slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={fancy8}
            alt="Eighth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={fancy9}
            alt="Ninth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={fancy10}
            alt="Tenth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={fancy11}
            alt="Eleventh slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={fancy12}
            alt="Twelvth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={fancy13}
            alt="Thirteenth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={fancy14}
            alt="Fourteenth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={fancy15}
            alt="Fifteenth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={fancy16}
            alt="Sixteenth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};