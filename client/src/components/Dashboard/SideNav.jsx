/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import axios from 'axios';
import { useParams, Link, useHistory } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle } from '@mui-treasury/components/info';

export default ({ username, setLogout }) => {

  const logout = () => {
    axios.get('http://localhost:8000/api/logout', { withCredentials: true })
      .then(res => {
        setLogout('')
      });
  };

  const logo = require('../static/images/onlypansegglogo.png');

  const logoutStyle = {
    color: '#ffc107',
    fontSize: 16,
    ':hover': {
      color: '#ffc107',
    },
  }

  return (
    <div className=''>
      <div className="wrapper d-flex align-items-stretch">
        <div id="sidebar" className='bg-dark'>
          <Row
            component={Link} to='/'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              bgcolor: 'transparent',
              pt: 2,
              pb: 1
            }}
          >
            <Item>
              <Avatar variant="square"
                src={logo} alt="logo"
                sx={{
                  height: 40,
                  width: 45,
                }}
              >
              </Avatar>
            </Item>
            <Info position={'middle'}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pl: 0,
                pt: 1,
              }}
            >
              <InfoTitle
                sx={{
                  fontSize: '1rem'
                }}
              >
                <span className='h3 fw-bold text-white pe-1'>
                  N L Y P A N S
                </span>
              </InfoTitle>
            </Info>
          </Row>
          <div className="px-5 pt-4">
            <Link to='#'> {/* edit user link above */}
              <img src="https://wallpapercave.com/uwp/uwp430668.png"
                // {user.profileAvatar}
                alt="{name}" className="img logo rounded-circle mb-5"></img>
            </Link>
            <ul className="list-unstyled components mb-5">
              <li>
                <Link to="/dashboard/:id">Overview</Link>
              </li>
              <li>
                <Link to="/recipes">Blog</Link>
              </li>
              <li className="active">
                <Link to="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Collection</Link>
                <ul className="list-unstyled components ps-2">
                  <li>
                    <Link to="/dashboard/users/:id">Users Liked</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/favorites/:id">Favorite Recipes</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
              <li>
                <Link to="/user/edit/:id">Edit Info</Link>
              </li>
            </ul>
            <div className="footer text-center text-white fw-bold mb-3 pb-4">
              <p>{username}</p>

              <p>
                <Button onClick={logout}
                  component={Link}
                  sx={logoutStyle}
                >Log out</Button>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
