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

  const thStyle = {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'text.primary'
  }

  const tdStyle = {
    fontSize: 14,
    // fontWeight: 'bold',
    color: 'text.primary'
  }

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
                  createdDate = (new Date(made)).toLocaleString();
                return (
                  <>
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">
                            <Typography
                              sx={thStyle}>
                              Recipe Name
                            </Typography>
                          </th>
                          <th scope="col">
                            <Typography
                              sx={thStyle}>
                              Publish Date
                            </Typography>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <DashboardBody
                            key={i}
                            value={value}
                            index={0}
                            dir={theme.direction}
                          >
                            <td>
                              <div className='d-flex align-items-center gap-3 ms-2'>
                                <Avatar
                                  src={recipe.image}
                                  variant="rounded"
                                />
                                <Typography
                                  sx={tdStyle}>
                                  {recipe.name}
                                </Typography>
                              </div>
                            </td>
                            <td>
                              <Typography
                                sx={tdStyle}>
                                {createdDate}
                              </Typography>
                            </td>
                          </DashboardBody>
                        </tr>
                      </tbody>
                    </table>
                  </>
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
        <p>© <Link to='/' sx={{ textDecoration: 'none !important' }}>
          OnlyPans</Link> 2022 by Unlimited Nerd Works, Inc.
        </p>
      </div>
    </div >
  );
};
