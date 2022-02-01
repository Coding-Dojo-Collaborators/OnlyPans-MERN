import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const Detail = (props) => {
    const [recipe, setRecipe] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/recipe/' + id)
            .then(res => setRecipe(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>{recipe.name}</h1>
            <img src = {recipe.image}></img>
            <p>Type of Cuisine: {recipe.cuisine}</p>
            <p>Description: {recipe.description}</p>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
            <p>Image URL: {recipe.image}</p>
            <p>Allergies (optional): {recipe.allergies}</p>
            <Link to={`/recipe/edit/${recipe._id}`}>
                Edit Recipe
            </Link>
        </div>
    )
}

export default Detail;