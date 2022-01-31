import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const RecipeList = (props) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/recipe')
            .then(res => setRecipes(res.data));
    }, [])

    const removeFromDom = recipeId => {
        setRecipes(recipes.filter(recipe => recipe._id !== recipeId))
    }

    return (
        <div>
            {recipes.map((recipe, index) => {
                return (
                    <p key={index}>
                        <img src = {recipe.image}></img>
                        {recipe.name}
                        |
                        <Link to={'/recipe/' + recipe._id}>
                            Recipe Details
                        </Link>
                        |
                        <Link to={'/recipe/edit/' + recipe._id}>
                            Edit Recipe
                        </Link>
                        |
                        <DeleteButton
                            recipeId={recipe._id}
                            successCallback={() => removeFromDom(recipe._id)}
                        />
                    </p>
                )
            })}
        </div >
    )
}

export default RecipeList;