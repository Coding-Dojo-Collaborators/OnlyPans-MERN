/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle } from '@mui-treasury/components/info';
import './Dashboard.css';

const DashboardBody = () => {
  return (
    <div>
      <div id="content" className="p-4 p-md-5">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="#" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DashboardBody;
