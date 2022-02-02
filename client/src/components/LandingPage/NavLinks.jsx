/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row } from '@mui-treasury/components/flex';
import Button from '@mui/material/Button';
import LoginModal from '../LandingPage/LoginModal'
import axios from 'axios';

export default ({user, setUser}) => {
  const history = useHistory()

  const buttonStyle = {
    ':hover': {
      bgcolor: '#ef5350', // theme.palette.primary.main
      color: 'white',
    },
    color: '#fff',
    fontWeight: 'bold'
  }

  const logout = () => {
    axios.get('http://localhost:8000/api/logout', { withCredentials: true })
    .then(res=>{
      setUser('')
      history.push('/');
    })
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
        {user == '' ?
        <ul className='navlinks d-flex pt-3 px-3'>
          <li className='list-unstyled ps-2'>
            <LoginModal>Log In</LoginModal>
          </li>
          </ul>
          :
          <ul className='navlinks d-flex pt-3 px-3'>
          <li className='list-unstyled pe-5'>
            <Button component={Link} to={`/dashboard/${user._id}`}
              // variant={`${variantMod}`}
              style={buttonStyle}
            >Home</Button>
          </li>
          <li className='list-unstyled pe-5'>
            <Button component={Link} to='/recipes'
              style={buttonStyle}
            >Blog</Button>
          </li>
          <li className='list-unstyled pe-5'>
            <Button onClick={logout}
              style={buttonStyle}
            >Log out</Button>
          </li>
        </ul>
          }
      </Row>
    </div>
  );
};

