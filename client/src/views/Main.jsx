/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeList from '../components/RecipeBlog/RecipeList';
import MainCarouselContainer from '../components/RecipeBlog/MainCarouselContainer';
import BlogHeader from '../components/RecipeBlog/BlogHeader';

export default () => {
  const [user, setUser] = useState("");
  const history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
      .then(res => {
        setUser(res.data)
      })
      .catch(err => {
        console.log("noUser logged in")
        history.push('/')
      })
  }, [history]);

  return (
    <div className='header'>
      <BlogHeader />
      <MainCarouselContainer />
      <RecipeList user={user} />
    </div>
  )
};