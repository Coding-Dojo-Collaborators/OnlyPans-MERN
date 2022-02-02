/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import ToggleColorMode from '../components/Themes/ToggleDarkMode';
import SideNav from '../components/Dashboard/SideNav';
import DashboardBody from '../components/Dashboard/DashboardBody';
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const baseTheme = createTheme();

export default () => {
  return (
    <div className=''>
      <div className='position-fixed'>
        <SideNav />
      </div>
      <div className='dashboard-body'>
        <ToggleColorMode currentPage="dashboard">
          <ThemeProvider theme={baseTheme}>
            <div className="App">
              <DashboardBody />
            </div>
          </ThemeProvider>
        </ToggleColorMode>
      </div>
    </div>
  );
};
