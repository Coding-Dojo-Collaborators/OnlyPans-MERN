import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const FavoriteRecipes = () => {
  const history = useHistory()
  const [recipes, setRecipes] = useState([])
  const [user, setUser] = useState('')

  useEffect(async() => {
    await axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
      .then(res => {
        console.log(res.data);
        setUser(res.data)
        res.data.favoriteRecipe.map((item, index) => {
          axios.get(`http://localhost:8000/api/recipe/${item}`)
          .then(res => {
            console.log(res.data)
            setRecipes([...recipes, res.data])
          })
          .catch(err => {
            console.log(err)
          })
          console.log(item);
        })
      })
      .catch(err => {
        console.log("noUser logged in")
        history.push('/')
      });
  }, []);

  // useEffect(() => {
  //   user.favoriteRecipe.map((item, index) => {
  //     axios.get(`http://localhost:8000/api/recipe/${item}`)
  //     .then(res => {
  //       console.log(res.data)
  //       setRecipes([...recipes, res.data])
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  //     console.log(item);
  //   })
  // }, [])

  return (
    <div>
      {recipes.map((recipe, index) => {
        return (
          <p key = {index}>
            <img src = {recipe.image} />
            {recipe.name}
          </p>
        )
      })}
    </div>
  )
};

export default FavoriteRecipes;
