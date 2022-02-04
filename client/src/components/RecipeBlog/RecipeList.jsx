/* eslint-disable array-callback-return */
import * as React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from '../Buttons/DeleteButton';
import { Button } from '@mui/material';

const RecipeList = ({ user }) => {
  const [recipes, setRecipes] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [sortTag, setSortTag] = useState('All POSTS')
  useEffect(() => {
    axios.get('http://localhost:8000/api/recipe')
      .then(res => setRecipes(res.data));
  }, []);

  const removeFromDom = recipeId => {
    setRecipes(recipes.filter(recipe => recipe._id !== recipeId))
  }

  const onFavoriteHandler = (id, img, name) => {
    let newFavorite = { id, img, name }
    let favorites = [...user.favoriteRecipe, newFavorite]
    axios.put(`http://localhost:8000/api/user/update/${user._id}`, {
      favoriteRecipe: favorites
    })
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      });
  };
  console.log(user);

  const linkStyle = {
    fontFamily: 'Open Sans',
    fontWeight: 'normal',
    color: '#000',
    textTransform: 'capitalize',
    p: 0,
    ':hover': {
      color: '#212121'
    },
    ':active': {
      fontWeight: 'bold'
    }
  }

  return (
    <div className='blog-body'>
      <h4 className='body-title text-center'>{sortTag}</h4>
      <div className='mt-5'>
        <ul className='categories-list 
        d-flex align-items-center justify-content-center gap-4'>
          <li>
            <Button component={Link} to='#'
             onClick={(e) => {
               setSortTag('All POSTS')
               setSortBy('')}}
              sx={linkStyle}
              className=''
            >
              All Posts
            </Button>
          </li>
          <li>
            <Button component={Link} to='#'
              sx={linkStyle}
              className=''
              onClick={(e) => {
                setSortTag('Breakfast')
                setSortBy('breakfast')}}
            >
              Breakfast
            </Button>
          </li>
          <li>
            <Button component={Link} to='#'
              sx={linkStyle}
              onClick={(e) => {
                setSortTag('Lunch')
                setSortBy('lunch')}}
              className=''
            >
              Lunch
            </Button>
          </li>
          <li>
            <Button component={Link} to='#'
              sx={linkStyle}
              className=''
              onClick={(e) =>{
                setSortTag('Dinner')
                setSortBy('dinner')}}
            >
              Dinner
            </Button>
          </li>
          <li>
            <Button component={Link} to='#'
              sx={linkStyle}
              className=''
              onClick={(e) => {
                setSortTag('Quick & Easy')
                setSortBy('quick')}}
            >
              Quick & Easy
            </Button>
          </li>
          <li>
            <Button component={Link} to='#'
              sx={linkStyle}
              className=''
              onClick={(e) => {
                setSortTag('Wine And Dine')
                setSortBy('wineAndDine')}}
            >
              Wine & Dine
            </Button>
          </li>
          <li>
            <Button component={Link} to='#'
              sx={linkStyle}
              className=''
              onClick={(e) => {
                setSortTag('Baked Goods')
                setSortBy('bakedGoods')}}
            >
              Baked Goods
            </Button>
          </li>
        </ul>
      </div>
      {recipes.filter((recipe) => {
        if (sortBy === '') {
          return recipe
        } else if (recipe.category.toLowerCase().includes(sortBy.toLowerCase())) {
          return recipe
        }
      }).map((recipe, index) => {
        return (
          <p key={index}>
            <img src={recipe.image} alt={recipe.name}></img>
            {recipe.name}
            |
            <Link to={'/recipe/' + recipe._id}>
              Recipe Details
            </Link>
            |
            {
              user._id === recipe._id ?
                <Link to={'/recipe/edit/' + recipe._id}>
                  Edit Recipe
                </Link>
                |
                <DeleteButton
                  recipeId={recipe._id}
                  successCallback={() => removeFromDom(recipe._id)}
                />
                : <></>
            }
            <Button
              onClick={(e) => onFavoriteHandler(recipe._id, recipe.image, recipe.name)}
            >
              Favorite
            </Button>
          </p>
        )
      })}
    </div >
  )
}

export default RecipeList;