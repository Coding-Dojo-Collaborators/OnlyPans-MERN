import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const FavoriteRecipes = ({ favoriteRecipes }) => {
  const [recipes, setRecipes] = useState([]);
  
  return (
    <div className='showOne'>
     {
       favoriteRecipes.map((recipe, i) => {
         return(
          <div>
            <p>{recipe.name}</p>
            <img src={recipe.img} alt="" />
          </div>
         )
       })
     }
    </div>
  )
};

export default FavoriteRecipes;
