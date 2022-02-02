/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import Typography from '@mui/material/Typography';
// import RegistrationModal from '../modals/RegistrationModal';
import { Button } from '@mui/material';

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
    ':hover': {
      bgcolor: '#ef5350', // theme.palette.primary.main
      color: 'white',
    },
    color: '#ef5350',
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 8,
    padding: '8px 15px',
    border: 1,
    borderColor: '#ef5350'
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
      <div>
        <Button
          sx={buttonStyle}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};