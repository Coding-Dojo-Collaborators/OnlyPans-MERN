/* eslint-disable array-callback-return */
import * as React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from '../Buttons/DeleteButton';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

const RecipeList = ({ user }) => {
  const [recipes, setRecipes] = useState([]);
  const [sortBy, setSortBy] = useState('');

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
      <h4 className='body-title text-center'>ALL POSTS</h4>
      <div className='d-flex align-items-center'>
        <ul className='categories-list 
        d-flex gap-4'>
          <li>
            <Button component={Link} to='#'
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
            >
              Breakfast
            </Button>
          </li>
          <li>
            <Button component={Link} to='#'
              sx={linkStyle}
              className=''
            >
              Lunch
            </Button>
          </li>
          <li>
            <Button component={Link} to='#'
              sx={linkStyle}
              className=''
            >
              Dinner
            </Button>
          </li>
          <li>
            <Button component={Link} to='#'
              sx={linkStyle}
              className=''
            >
              Quick & Easy
            </Button>
          </li>
          <li>
            <Button component={Link} to='#'
              sx={linkStyle}
              className=''
            >
              Wine & Dine
            </Button>
          </li>
          <li>
            <Button component={Link} to='#'
              sx={linkStyle}
              className=''
            >
              Baked Goods
            </Button>
          </li>
        </ul>
        <select name="catergory" id="category"
          className='form-select'
          value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option selected value="">All Recipes</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="quick">Quick And Easy</option>
          <option value="wineAndDine">Wine And Dine</option>
          <option value="bakedGoods">Baked Goods</option>
        </select>
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