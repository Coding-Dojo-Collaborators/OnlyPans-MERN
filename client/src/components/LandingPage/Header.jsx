/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle } from '@mui-treasury/components/info';

export default () => {
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
          <span className='h1 fw-bold text-white pe-5'>
            N L Y P A N S
          </span>
        </InfoTitle>
      </Info>
    </Row>
  );
};

