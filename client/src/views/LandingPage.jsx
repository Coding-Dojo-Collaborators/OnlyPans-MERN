/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState, useEffect} from 'react'
import axios from 'axios';
// import ToggleColorMode from '../components/Themes/ToggleDarkMode';
import bgImage from '../components/static/images/bgimage2.jpg';
import Header from '../components/LandingPage/Header';
import NavLinks from '../components/LandingPage/NavLinks';
import LandingBody from '../components/LandingPage/LandingBody';

export default () => {
  const [user, setUser] = useState('')

  const myStyle = {
    backgroundImage:
      `url(${bgImage})`,
    height: '100vh',
    paddingTop: 0,
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  useEffect(() => {
    axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
      .then(res => {
        setUser(res.data)
      })
      .catch(err => {
        console.log("noUser logged in")

      })
  }, [user]);
  return (
    <div className='landingPage'
      style={myStyle}>
      {/* <ToggleColorMode currentPage="landingPage" /> */}
      <div className='d-flex align-items-center justify-content-between'>
        <div className='d-flex justify-content-start'>
          <Header />
        </div>
        <div className='d-flex justify-content-end'>
          <div className='d-flex justify-content-evenly'>
            <NavLinks user={user} setUser={setUser} />
          </div>
        </div>
      </div>
      <LandingBody />
    </div>
  );
};