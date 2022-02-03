/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle } from '@mui-treasury/components/info';
import { Typography } from '@mui/material';

export default ({ currentPage }) => {
  const logo = require('../static/images/bloglogo.png');

  return (
    <Row
      sx={{
        display: 'flex',
        justifyContent: 'center',
        bgcolor: 'transparent',
        marginTop: 50,
        px: 5,
        py: 5,
        border: '5px solid #000',
      }}
    >
      <Item>
        <img src={logo} alt="logo"
          style={{
            height: 60,
            width: 'auto',
            ml: 5
          }}
        />
      </Item>
      <Info position={'middle'}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pl: 1,
          pt: 1,
        }}
      >
        <InfoTitle
          sx={{
            fontSize: '3rem'
          }}
        >
          {
            currentPage === 'landingPage' ?
              <span className='h1 fw-bold text-white pe-5'>
                N L Y P A N S
              </span>
              :
              currentPage === 'createRecipe' ?
                <span className='h1 fw-bold text-white pe-5'>
                  <Typography
                    sx={{ color: 'text.primary' }}>
                    N L Y P A N S
                  </Typography>
                </span>
                :
                <></>

          }
        </InfoTitle>
      </Info>
    </Row>
  );
};

