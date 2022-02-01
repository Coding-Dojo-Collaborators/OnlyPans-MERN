/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
// import Link from 'react-router-dom';
import { Row } from '@mui-treasury/components/flex';
import LoginModal from '../LandingPage/LoginModal'

export default () => {
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
          <li className='list-unstyled pe-5'>Home</li>
          <li className='list-unstyled pe-5'>Blog</li>
          <li className='list-unstyled pe-5'>
            <LoginModal>Log In</LoginModal>
          </li>
        </ul>
      </Row>
    </div>
  );
};

