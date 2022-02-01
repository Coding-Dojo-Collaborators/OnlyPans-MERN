/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import ToggleColorMode from '../components/Themes/ToggleDarkMode';
// import { Container } from '@mui/material';
// import Header from '../components/LandingPage/Header';

export default () => {
  return (
    <ToggleColorMode currentPage="landingPage">
      {/* <Header /> */}
    </ToggleColorMode>
  );
};