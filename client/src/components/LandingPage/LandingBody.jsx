/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
// import { Container } from '@mui/material';

export default () => {
  const bgImg = require('../static/images/foodbloggers.jpg');

  return (
    <div styles={{
      backgroundImage: `url(${bgImg})`
    }} className='bg-secondary'
    ></div>
  );
};