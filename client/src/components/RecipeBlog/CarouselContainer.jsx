import React from 'react';
import { Carousel } from 'react-bootstrap'
import Main1 from '../static/images/Main1.jpg'
import Main2 from '../static/images/Main2.jpg'
import Main3 from '../static/images/Main3.jpg'

const CarouselContainer = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-70"
                    src={Main1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-70"
                    src={Main2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-70"
                    src={Main3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
};

export default CarouselContainer;
