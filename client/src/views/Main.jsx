/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeList from '../components/RecipeBlog/RecipeList';
import BlogHeader from '../components/RecipeBlog/BlogHeader';

export default () => {
  const [user, setUser] = useState("");
  let navigate = useNavigate();
  const [logout, setLogout] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8000/api/users/getloggedinuser",
      { withCredentials: true })
      .then(res => {
        setUser(res.data)
      })
      .catch(err => {
        console.log("noUser logged in")
        navigate('/')
      })
  }, [navigate, logout]);

  return (
    <div className='container'>
      <BlogHeader setLogout={setLogout} user={user} pageComponent='viewallrecipes' />
      <RecipeList user={user} />
    </div>
  )
};