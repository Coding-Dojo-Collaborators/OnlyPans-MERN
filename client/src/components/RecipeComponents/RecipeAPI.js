import React, { useState } from 'react';
import axios from 'axios';

const RecipeAPI = () => {
    const [input, setInput] = useState('')
    const [recipes, setRecipes] = useState([])

    const onClickHandler = async (e) => {
        e.preventDefault();

        let options = {
            method: 'GET',
            url: 'https://edamam-recipe-search.p.rapidapi.com/search',
            params: { q: `${input}`, from: 0, to: 100 },
            headers: {
                'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com',
                'x-rapidapi-key': 'cd2611e50cmshaa4b4e36b6e52a2p10c7dfjsn24c38a5d6912'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setRecipes(response.data.hits)
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <div>
            <form>
                <input type='input' value={input}
                    onChange={(e) => setInput(e.target.value)}
                ></input>
                <button type='submit' onClick={onClickHandler}>Submit</button>
            </form>
            {recipes.map((recipe, index) => {
                return (
                    <div key={index}>
                        <>
                            <img src={recipe.recipe.image}></img>
                            <h2>{recipe.recipe.label}</h2>
                            <p>{recipe.recipe.cuisineType}</p>
                            <p>{recipe.recipe.dishType}</p>
                            <p>{recipe.recipe.mealType}</p>
                            <a href = {recipe.recipe.url}>Details</a>
                        </>
                    </div>
                )
            })}
        </div>
    )
};

export default RecipeAPI;
