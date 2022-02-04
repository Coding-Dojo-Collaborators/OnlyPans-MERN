/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';

export default () => {
  return (
    <div>
      <div id="" className="p-0">
        <div className="px-0 d-flex justify-content-between">
          <Box
            sx={{
              '& > :not(style)': {
                ml: 1,
              },
              display: 'flex',
              alignItems: 'center',
              ':hover': {
                color: '#ffc107'
              }
            }}
            className="create-recipe"
          >
            <Typography component={Link} to='/recipe/new'
              className='label-hidden d-flex align-items-center'
              sx={{ color: '#ffc107 !important' }}
            >Create Recipe
            </Typography>
            <Icon component={Link} to='/recipe/new'
              sx={{
                ':hover': {
                  color: '#ffc107'
                }
              }}
              className='iconButton'>
              add_circle</Icon>
          </Box>
        </div>
      </div>
    </div >
  );
};
