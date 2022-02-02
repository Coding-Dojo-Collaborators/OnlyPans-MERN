import axios from 'axios';
import React, { useState, useEffect } from 'react';
import RecipeList from '../components/RecipeBlog/RecipeList';
import { useHistory } from 'react-router-dom';
const Main = () => {
    const history = useHistory();
    const [user, setUser] = useState('')
  useEffect(() => {
    axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
      .then(res => {
        setUser(res.data)
      })
      .catch(err => {
        console.log("noUser logged in")
        history.push('/')
      })
  }, []);
  return (
      <div>
          <RecipeList user={user}/>
      </div>
  )
};

export default Main;
