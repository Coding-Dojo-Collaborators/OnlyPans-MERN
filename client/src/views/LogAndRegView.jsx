/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ToggleColorMode from '../components/Themes/ToggleDarkMode';

export default ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
      .then(res => {
        history.push('/')
      })
      .catch(err => {
        console.log("noUser logged in")
      })
  }, [history]);

  return (
    <ToggleColorMode currentPage="">
      <div className=' '>
        <div >
          {children}
        </div>
      </div>
    </ToggleColorMode>
  )
};