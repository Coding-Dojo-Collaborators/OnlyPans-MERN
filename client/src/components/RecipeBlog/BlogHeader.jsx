/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Item } from '@mui-treasury/components/flex';
import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
// import IconButton from "@material-ui/core/IconButton";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@material-ui/icons/Search";
import MainCarouselContainer from './MainCarouselContainer';
import ViewOneCarousel from './ViewOneCarousel';
import BreakfastCarousel from './BreakfastCarousel';
import LunchCarousel from './LunchCarousel';
import DinnerCarousel from './DinnerCarousel';
import QuickiesCarousel from './QuickiesCarousel';
import FancyCarousel from './FancyCarousel';
import SweetsCarousel from './SweetsCarousel';
import axios from 'axios';

// const CssTextField = styled(TextField)({
//   '& label.Mui-focused': {
//     display: 'none',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: '#000',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: '#000',
//     },
//     '&:hover fieldset': {
//       borderColor: '#212121',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: '#000',
//     },
//   },
// });

export default ({ pageComponent, user, setLogout }) => {
  const logo = require('../static/images/bloglogo.png');

  const linkStyle = {
    fontFamily: 'Open Sans',
    fontWeight: 'normal',
    color: '#000',
  }
  const logout = () => {
    axios.get('http://localhost:8000/api/logout', { withCredentials: true })
      .then(res => {
        setLogout(res)
      });
  };
  // const searchStyle = {
  //   width: '550px',
  //   height: '55px',
  //   marginTop: '-105px',
  //   bgcolor: '#fff',
  // }

  return (
    <div className='container-header'>
      <div className='header-links
      d-flex align-items-center justify-content-between mx-5'>
        <div className="blog-links">
          <Button component={Link} to={`/dashboard/${user._id}`}
            sx={linkStyle}
          >Home</Button>
        </div>
        <div className="blog-logout">
          <Button onClick={logout}
            sx={linkStyle}
          >Log out</Button>
        </div>
      </div>
      <div className='carousel-header'>
        {
          pageComponent === 'viewallrecipes' ?
            <MainCarouselContainer /> :
            pageComponent === 'viewonerecipe' ?
              <ViewOneCarousel /> :
              pageComponent === 'breakfastrecipes' ?
                <BreakfastCarousel /> :
                pageComponent === 'lunchrecipes' ?
                  <LunchCarousel /> :
                  pageComponent === 'dinnerrecipes' ?
                    <DinnerCarousel /> :
                    pageComponent === 'quickrecipes' ?
                      <QuickiesCarousel /> :
                      pageComponent === 'wineanddine' ?
                        <FancyCarousel /> :
                        pageComponent === 'bakedgoods' ?
                          <SweetsCarousel /> :
                          <></>
        }
        <div>
          <div className="carousel blog-logo d-flex justify-content-center">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                bgcolor: 'transparent',
                marginTop: '-360px',
                width: '400px',
                height: '85px',
                // width: '500px'
              }}
            >
              <Item sx={{
                boxSizing: 'content-box !important',
                border: '5px solid #000',
                bgcolor: '#fff',
              }}>
                <img src={logo} alt="logo"
                  style={{
                    height: 80,
                    width: 'auto',
                    padding: '10px 20px 18px',
                  }}
                />
              </Item>
            </div>
          </div>
          {/* <div className="searchfield d-flex justify-content-center">
            <CssTextField
              id="searchfield"
              label="Search for recipes..."
              InputLabelProps={{ shrink: false }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              inputProps={{
                style: {
                  px: 3
                }
              }}
              sx={searchStyle}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

