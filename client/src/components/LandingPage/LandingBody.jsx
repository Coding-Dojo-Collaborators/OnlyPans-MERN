/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { Container } from '@mui/material';
import { fontFamily } from '@mui/system';
import Typography from '@mui/material/Typography';

export default () => {

  const welcomeStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#fff',
    ml: 10,
    mt: -30,
    height: '100vh',
    fontFamily: 'Playfair Display'
  }

  return (
    <div>
      <Container>
        <Typography variant="h2" gutterBottom component="div">
          h2. Heading
        </Typography>
        <Typography
          style={welcomeStyle}
          sx={{
            fontSize: '4.5rem',
            fontWeight: 'bold'
          }}
        >
          Welcome to OnlyPans
        </Typography>
      </Container>
      <Container>
        <Typography variant="h4" gutterBottom component="div">
          h4. Heading
        </Typography>
        <Typography
          // style={subtitleStyle}
          sx={{
            fontSize: '1.5rem',
          }}
        >
          Access our collection of recipes made by our community of bloggers
        </Typography>
      </Container>


    </div>
  );
};