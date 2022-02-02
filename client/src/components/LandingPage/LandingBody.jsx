/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import Typography from '@mui/material/Typography';
import RegistrationModal from './RegistrationModal';

export default () => {

  const welcomeStyle = {
    color: '#fff',
    fontFamily: 'Playfair Display',
    marginTop: 220,
    marginLeft: 50
  }

  const metaStyle = {
    color: '#fff',
    fontFamily: 'Playfair Display',
    marginTop: 40,
    marginLeft: 65,
    width: '420px'
  }

  const buttonStyle = {
    marginTop: 20,
    marginLeft: 55
  }

  return (
    <div style={welcomeStyle} className='ps-5 ms-5'>
      <Typography variant="h2" component="div"
        style={welcomeStyle}
        sx={{
          fontSize: '4.5rem',
          fontWeight: 'bold'
        }}
      >
        Welcome to OnlyPans
      </Typography>
      <Typography variant="h4" component="div"
        style={metaStyle}
        sx={{
          fontSize: '1.5rem',
        }}
      >
        Access our collection of recipes made by our community of bloggers
      </Typography>
      <div style={buttonStyle}>
        <RegistrationModal />
      </div>
    </div>
  );
};