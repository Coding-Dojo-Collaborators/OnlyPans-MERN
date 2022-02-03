/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { Row, Item } from '@mui-treasury/components/flex';
import MainCarouselContainer from './MainCarouselContainer';
import ViewOneCarousel from './ViewOneCarousel';
import BreakfastCarousel from './BreakfastCarousel';
import LunchCarousel from './LunchCarousel';
import DinnerCarousel from './DinnerCarousel';
import QuickiesCarousel from './QuickiesCarousel';
import FancyCarousel from './FancyCarousel';
import SweetsCarousel from './SweetsCarousel';

export default ({ pageComponent }) => {
  const logo = require('../static/images/bloglogo.png');

  return (
    <div className='container-header'>
      <div className='header-links'>
        <div className="blog-links">
          {/* <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
        </div>
      </div>
      {
        pageComponent === 'viewallrecipes' ?
          <MainCarouselContainer /> :
          pageComponent === 'viewonerecipe' ?
            <ViewOneCarousel /> :
            pageComponent === 'breakfastrecipes' ?
              <BreakfastCarousel /> :
              pageComponent === 'lunchrecipes' ?
                <LunchCarousel /> :
                pageComponent === 'dinnerrecipes' ?
                  <DinnerCarousel /> :
                  pageComponent === 'quickrecipes' ?
                    <QuickiesCarousel /> :
                    pageComponent === 'wineanddine' ?
                      <FancyCarousel /> :
                      pageComponent === 'bakedgoods' ?
                        <SweetsCarousel /> :
                        <></>
      }
      <div className="carousel blog-logo">
        <Row
          sx={{
            display: 'flex',
            justifyContent: 'center',
            bgcolor: 'transparent',
            marginTop: '-310px'
          }}
        >
          <Item sx={{
            boxSizing: 'content-box !important',
            border: '5px solid #000',
            bgcolor: '#fff',
          }}>
            <img src={logo} alt="logo"
              style={{
                height: 80,
                width: 'auto',
                padding: '10px 20px 15px',
              }}
            />
          </Item>
        </Row>
      </div>
    </div>
  );
};

