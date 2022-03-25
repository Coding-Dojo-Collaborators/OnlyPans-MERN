/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ToggleColorMode from '../components/Themes/ToggleDarkMode';
import SideNav from '../components/Dashboard/SideNav';
import DashboardBody from '../components/Dashboard/DashboardBody';
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const baseTheme = createTheme();

export default () => {
  const [user, setUser] = useState('');
  const [logout, setLogout] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
      .then(res => {

        setUser(res.data)
      })
      .catch(err => {
        console.log("noUser logged in")
        navigate('/')
      });
  }, [navigate, logout]);


  return (
    <div className=''>
      <div className='position-fixed'>
        <SideNav setLogout={setLogout}
          avatar={user.profileAvatar}
          username={user.username}
          id={user._id} />
      </div>
      <div className='dashboard-body'>
        <ToggleColorMode currentPage="dashboard">
          <ThemeProvider theme={baseTheme}>
            <div className="App">
              <DashboardBody user={user._id} />
            </div>
          </ThemeProvider>
        </ToggleColorMode>
      </div>
    </div>
  );
};
