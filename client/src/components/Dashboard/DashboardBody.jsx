/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar';
// import { Row, Item } from '@mui-treasury/components/flex';
// import { Info, InfoTitle } from '@mui-treasury/components/info';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const DashboardBody = ({ user, children, value, index, ...other }) => {
  // eslint-disable-next-line no-unused-vars
  
  return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`full-width-tabpanel-${index}`}
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

export default function BasicTabs({user}) {
  
  
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const [recipe, setRecipe] = useState([]);
  
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
  console.log(recipe[1])
  return (
    <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant=""
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          
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
                return (
                  <DashboardBody value={value} index={0} dir={theme.direction}>
                    {recipe.name}
            </DashboardBody>
                );
              })
            }
          </div>
        <DashboardBody value={value} index={1} dir={theme.direction}>
          Item Two
        </DashboardBody>
      </SwipeableViews>
    </Box>
  );
};
