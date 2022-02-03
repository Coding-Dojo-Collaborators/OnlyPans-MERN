import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const FavoriteRecipes = ({favoriteRecipes}) => {
  
  const [recipes, setRecipes] = useState([])
  
  
  
  console.log(favoriteRecipes);
  useEffect(() => {

    favoriteRecipes.map((item,i)=>{
      axios.get(`http://localhost:8000/api/recipe/favorites`,
      favoriteRecipes
      )
      .then(res => {
        console.log(res.data)
        setRecipes( res.data.results)
    
      })
      .catch(err => {
        console.log(err)
      })
  
    })
    
  },[])


  
    
 
  console.log(recipes)
  return (
    <div className='showOne'>
      { 
      recipes.map((recipe, index) => {
        return (
          <p key = {index}>
            <img className='showOne' src = {recipe.image} />
            {recipe.name}
          </p>
        )
      })}
    </div>
  )
};

export default FavoriteRecipes;
