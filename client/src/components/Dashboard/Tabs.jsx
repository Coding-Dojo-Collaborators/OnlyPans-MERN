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
import DashboardBody from './DashboardBody';

DashboardBody.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-DashboardBody-${index}`,
  };
}

export default function FullWidthTabs() {
  const [recipe, setRecipe] = useState([]);
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <DashboardBody value={value} index={0} dir={theme.direction}>
          Item One
          <div>
            {
              recipe.map((recipe, i) => {
                return (
                  <p>
                    {recipe.name}
                  </p>
                )
              })
            }
          </div>
        </DashboardBody>
        <DashboardBody value={value} index={1} dir={theme.direction}>
          Item Two
        </DashboardBody>
        <DashboardBody value={value} index={2} dir={theme.direction}>
          Item Three
        </DashboardBody>
      </SwipeableViews>
    </Box>
  );
};