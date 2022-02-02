/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Row } from '@mui-treasury/components/flex';
import Button from '@mui/material/Button';
import LoginModal from '../LandingPage/LoginModal'

export default () => {

  const buttonStyle = {
    ':hover': {
      bgcolor: '#ef5350', // theme.palette.primary.main
      color: 'white',
    },
    color: '#fff',
    fontWeight: 'bold'
  }

  return (
    <div className='mx-5'>
      <Row
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <ul className='d-flex pt-3 px-3'>
          <li className='list-unstyled pe-5'>
            <Button component={Link} to='/dashboard/:id'
              variant="text"
              sx={buttonStyle}
            >Home</Button>
          </li>
          <li className='list-unstyled pe-5'>
            <Button component={Link} to='/recipes'
              variant="text"
              sx={buttonStyle}
            >Blog</Button>
          </li>
          <li className='list-unstyled ps-2'>
            <LoginModal>Log In</LoginModal>
          </li>
        </ul>
      </Row>
    </div>
  );
};

