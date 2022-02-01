/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeList from '../../components/RecipeBlog/RecipeList';
import RecipeAPI from '../../components/RecipeBlog/RecipeAPI';

export default () => {
  const [recipes, setRecipes] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/recipe')
      .then(res => {
        setRecipes(res.data);
        setLoaded(true);
      })
      .catch(err => console.error(err));
  }, []);

  const removeFromDom = recipeId => {
    setRecipes(recipes.filter(recipe => recipe._id !== recipeId));
  }

  return (
    <div>
      <Link to='/recipe/new'>Add a Recipe</Link>
      <hr />
      {loaded && <RecipeAPI recipes={recipes} />}
      {loaded && <RecipeList recipes={recipes} removeFromDom={removeFromDom} />}
    </div>
  )
}