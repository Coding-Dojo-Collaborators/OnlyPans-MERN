/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
// import ToggleColorMode from '../components/Themes/ToggleDarkMode';
import bgImage from '../components/static/images/bgimage2.jpg';
import Header from '../components/LandingPage/Header';
import NavLinks from '../components/LandingPage/NavLinks';

export default () => {

  const myStyle = {
    backgroundImage:
      `url(${bgImage})`,
    height: '100vh',
    paddingTop: 0,
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className='landingPage'
      style={myStyle}>
      {/* <ToggleColorMode currentPage="landingPage" /> */}
      <div className='d-flex align-items-center justify-content-between'>
        <div className='d-flex justify-content-start'>
          <Header />
        </div>
        <div className='d-flex justify-content-end'>
          <div className='d-flex justify-content-evenly'>
            <NavLinks />
          </div>
        </div>
      </div>
    </div>
  );
};