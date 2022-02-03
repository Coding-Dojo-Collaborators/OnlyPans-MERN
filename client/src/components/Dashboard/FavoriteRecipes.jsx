import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const FavoriteRecipes = ({ favoriteRecipes }) => {
  const [recipes, setRecipes] = useState([]);

  console.log(favoriteRecipes);
  useEffect(() => {

    axios.get(`http://localhost:8000/api/recipe/`,
      favoriteRecipes
    )
      .then(res => {
        console.log(res.data)
        setRecipes(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, [])

  console.log(recipes)

  return (
    <div className='showOne'>
      {recipes.filter(function (currentElement) {
        return (
          favoriteRecipes.map((recipe, i) => {
            recipes._id == recipe
          })
        )
      })
      }
    </div>
  )
};

export default FavoriteRecipes;
