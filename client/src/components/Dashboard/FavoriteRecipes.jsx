import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const FavoriteRecipes = ({ favoriteRecipes }) => {
  const [recipes, setRecipes] = useState([]);
  
  console.log(favoriteRecipes);
  // useEffect(() => {

  //   axios.get(`http://localhost:8000/api/recipe/favorites`,
  //     favoriteRecipes
  //   )
  //     .then(res => {
  //       console.log(res.data)
  //       setRecipes(res.data)

  //     //   setRecipes(res.data)
  //      })
  //     .catch(err => {
  //       console.log(err)
  //     })

  // }, [])

  // console.log(recipes)

console.log(favoriteRecipes)
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
