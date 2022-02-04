/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle } from '@mui-treasury/components/info';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
export default ({ currentPage, id }) => {
  const logo = require('../static/images/onlypansegglogo.png');

  return (
    <Row
      sx={{
        display: 'flex',
        justifyContent: 'start',
        bgcolor: 'transparent'
      }}
    >
      <Item>
        <Avatar variant="square"
          src={logo} alt="logo"
          sx={{
            height: 60,
            width: 65,
            ml: 5
          }}
        >
        </Avatar>
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
                   variant="h3"
                   component={Link} to={`/dashboard/${id}`}
                    sx={{ 
                      color: 'text.primary' ,
                      textDecoration:'none'
                      
                      }}>
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

