/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
// import ScrollToTopButton from '../Buttons/ScrollToTopButton';
import Typography from '@mui/material/Typography';

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="inherit" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="#"
        className="copyright-link">
        OnlyPans
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default () => {
  return (
    <div>
      {/* <ScrollToTopButton /> */}
      <div className='blog-footer text-center my-5'>
        <Copyright />
      </div>
    </div>
  );
};
