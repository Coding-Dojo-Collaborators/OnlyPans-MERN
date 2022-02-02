/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useState , useEffect} from "react"
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle } from '@mui-treasury/components/info';
import './Dashboard.css';
import axios from 'axios';


export default ({user}) => {
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8000/api/recipe/user/${user}`)
    .then(res => {
      console.log(res.data);
      // setRecipe(res.data)
    }).catch(err => console.log(err))
  },[])
  return (
    <div>
      <div id="content" className="p-4 p-md-5">
       



      </div>
    </div>
  );
};
