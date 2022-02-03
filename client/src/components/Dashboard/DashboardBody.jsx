/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ManagePostsTab from './ManagePostsTab';
import Avatar from '@mui/material/Avatar';

const DashboardBody = ({ user, children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

DashboardBody.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ user }) {
  const [recipe, setRecipe] = useState([]);
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/recipe/user/${user}`)
      .then(res => {
        // console.log(res.data);
        setRecipe(res.data)
      }).catch(err => console.log(err))
  }, [user]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  console.log(recipe[1]);

  return (
    <div className='d-flex justify-content-center'>
      <Box sx={{ bgcolor: 'background.paper', width: 750 }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            aria-label="basic tabs example"
            sx={{
              bgcolor: '#272727'
            }}
          >
            <Tab label="Latest Posts" {...a11yProps(0)} />
            <Tab label="Manage Posts" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <div>
            {
              recipe.map((recipe, i) => {
                let made = recipe.createdAt,
                  cdate = (new Date(made)).toLocaleString();
                return (
                  <DashboardBody
                    key={i}
                    value={value}
                    index={0}
                    dir={theme.direction}
                  >
                    <div className='d-flex align-items-center gap-3 ms-2'>
                      <Avatar
                        src={recipe.image}
                        variant="rounded"
                      />
                      <div className='d-flex justify-content-between gap-5'>
                        {recipe.name}
                        <span className='ms-4 pe-2'>{cdate}</span>
                      </div>
                    </div>
                  </DashboardBody>
                );
              })
            }
          </div>
          <DashboardBody
            value={value}
            index={1}
            dir={theme.direction}>
            <ManagePostsTab />
          </DashboardBody>
        </SwipeableViews>
      </Box>
      <div className='sticky-footer text-center fixed-bottom'>
        <p>© <Link to='/' underlineNone>OnlyPans</Link> 2022 by Unlimited Nerd Works, Inc.</p>
      </div>
    </div>
  );
};
