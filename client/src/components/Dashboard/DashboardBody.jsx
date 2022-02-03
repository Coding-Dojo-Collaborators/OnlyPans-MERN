/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState , useEffect} from "react"
// import { Link } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar';
// import { Row, Item } from '@mui-treasury/components/flex';
// import { Info, InfoTitle } from '@mui-treasury/components/info';

import axios from 'axios';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ChromeTabs from './ChromeTabs';


export default ({user}) => {
  const [recipe, setRecipe] = useState([])
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/recipe/user/${user}`)
    .then(res => {
      console.log(res.data);
      setRecipe(res.data)
    }).catch(err => console.log(err))
  },[])
  


 
   console.log(recipe);
    return (
      <div>
        <div className='d-flex justify-content-center'>
          <AppBar
            position={''}
            elevation={0}
            style={{ backgroundColor: '#E6E8EB', width: 900 }}
          >
            <Toolbar>
              <ChromeTabs
                style={{ alignSelf: 'flex-end' }}
                tabs={[
                  { label: 'Latest Published' },
                  { label: 'Manage Posts' },
                ]}
                tabStyle={{
                  bgColor: '#E6E8EB',
                  selectedBgColor: '#ffffff',
                  color: 'rgba(0,0,0,0.87)',
                }}
                tabProps={{
                  disableRipple: true,
                }}
                value={index}
                onChange={(e, i) => setIndex(i)}
              />
            </Toolbar>
          </AppBar>
        </div>
          <div>
            {
              recipe.map((recipe, i) => {
                return(
                  <p>
                    {recipe.name}
                  </p>
                )
              })
            }
          </div>
      </div>
    );
  }; 