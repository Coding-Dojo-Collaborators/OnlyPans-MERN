/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FavoriteRecipes from '../../components/Dashboard/FavoriteRecipes';
import SideNav from '../../components/Dashboard/SideNav';
import ToggleColorMode from '../../components/Themes/ToggleDarkMode';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core';

const baseTheme = createTheme();

export default () => {
  const [user, setUser] = useState(false);
  const [logout, setLogout] = useState();
  let navigate = useNavigate();

  useEffect(async () => {
    await axios.get("http://localhost:8000/api/users/getloggedinuser",
      { withCredentials: true })
      .then(res => {
        setUser(res.data)
      })
      .catch(err => {
        console.log("noUser logged in");
        navigate('/');
      })
  }, [logout]);

  return (
    <div>
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
              {
                user &&
                <FavoriteRecipes favoriteRecipes={user.favoriteRecipe} />
              }
            </div>
          </ThemeProvider>
        </ToggleColorMode>
      </div>
    </div>
  )
};
