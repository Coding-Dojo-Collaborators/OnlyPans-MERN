/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
// import ToggleColorMode from '../components/Themes/ToggleDarkMode';
import SideNav from '../components/Dashboard/SideNav';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import DashboardBody from '../components/Dashboard/DashboardBody';

export default () => {
  return (
    <div>
      <SideNav />
      {/* <ToggleColorMode currentPage="dashboard" /> */}
      <DashboardHeader />
      <DashboardBody />
    </div>
  );
};
