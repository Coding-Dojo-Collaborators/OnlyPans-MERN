/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
import './Dashboard.css';

export default () => {

  const iconStyle = {
    color: 'text.secondary',
    backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0 %, rgba(255, 255, 255, 5) 33 %, rgba(255, 255, 255, 1) 33 %)',
    boxSizing: 'border - box',
    padding: '20px',
    position: 'relative',
    margin: '-20px',
    textDecoration: 'none',
    color: 'black', /*Color of the Icon*/
    position: 'absolute',
    zIndex: 20,
    right: '15px',
    bottom: '15px',
    fontSize: '26px!important',
    textAlign: 'center',
    lineHeight: '28px!important',
  }

  return (
    <div>
      <div id="content" className="p-0">
        <div className="navbar-expand-lg bg-transparent">
          <div className="container-fluid px-0">
            <Box
              sx={{
                '& > :not(style)': {
                  ml: 1,
                },
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {/* <Button
                component={Link} to='/recipe/new'
                variant="contained"
                startIcon={<AddCircleIcon
                  icon={AddCircleIcon} />}>
                Add New Recipe
              </Button> */}
              <div className='new-recipe'>
                <span className="label-hidden">
                  <Typography component={Link} to='/recipe/new'
                    sx={{ color: 'text.secondary' }}>Create Recipe</Typography>
                </span>
                <Icon component={Link} to='/recipe/new'
                  sx={iconStyle}>add_circle</Icon>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};
