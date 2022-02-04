/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Quick from '../static/images/main-carousel/Quick.jpg';
import Breakfast from '../static/images/main-carousel/Breakfast.jpg';
import Snacks from '../static/images/main-carousel/Snacks.png';
import Lunch from '../static/images/main-carousel/Lunch.jpg';
import Dinner from '../static/images/main-carousel/Dinner.jpg';
import Fancy from '../static/images/main-carousel/Fancy.jpg';
import Sweets from '../static/images/main-carousel/Sweets.jpg';
import Assorted from '../static/images/main-carousel/Assorted.jpg';

export default () => {
  return (
    <div className='carousel'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={Quick}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={Breakfast}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={Snacks}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={Lunch}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={Dinner}
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={Fancy}
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={Sweets}
            alt="Seventh slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block item-carousel"
            src={Assorted}
            alt="Eigth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};