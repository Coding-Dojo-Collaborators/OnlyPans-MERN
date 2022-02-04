import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const Detail = (props) => {
    const [recipe, setRecipe] = useState({})
    const { id } = useParams();
    const history = useHistory();
    const [user, setUser] = useState('')
    useEffect(() => {
        axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setUser(res.data)
            })
            .catch(err => {
                history.push('/')
                console.log("noUser logged in")
            });
        axios.get('http://localhost:8000/api/recipe/' + id)
            .then(res => setRecipe(res.data))
            .catch(err => console.error(err));
    }, []);
    

    console.log(user._id )
     console.log(recipe.userId)
    return (
        <div>
            <h1>{recipe.name}</h1>
            <img src={recipe.image}></img>
            <p>Type of Cuisine: {recipe.cuisine}</p>
            <p>Category: {recipe.category}</p>
            <p>Description: {recipe.description}</p>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
            <p>Allergies (optional): {recipe.allergies}</p>
            {
                user._id === recipe.userId ?
                    <Link to={`/recipe/edit/${recipe._id}`}>
                        Edit Recipe
                    </Link>
                    : <></>
            }
        </div>
    )
}

export default Detail;