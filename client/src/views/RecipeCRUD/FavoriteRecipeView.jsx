import React, { useEffect, useState } from 'react';
import FavoriteRecipes from '../../components/Dashboard/FavoriteRecipes';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
export const FavoriteRecipeView = () => {
  const [user, setUser] = useState(false)
  const history = useHistory()

  useEffect(async () => {
    await axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
      .then(res => {
        console.log(res.data);
        setUser(res.data)
      })
          .catch(err => {
            console.log("noUser logged in")
            history.push('/')
      })

  }, []);



  return (
    <div>
      {
        user &&
      <FavoriteRecipes favoriteRecipes={user.favoriteRecipe} />
      }
    </div>
  )
};
