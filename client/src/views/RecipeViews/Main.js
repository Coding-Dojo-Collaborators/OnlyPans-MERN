import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RecipeList from '../../components/RecipeComponents/RecipeList';
import { Link } from 'react-router-dom';

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
            <Link to = '/recipe/new'>Add a Recipe</Link>
            <hr />
            {loaded && <RecipeList recipes={recipes} removeFromDom={removeFromDom} />}
        </div>
    )
}