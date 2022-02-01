import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default (props) => {
    const { initialName, initialCuisine, initialDescription, initialIngredients, initialInstructions, initialImage, initialAllergies,onSubmitProp, errors } = props;
    const [name, setName] = useState(initialName);
    const [cuisine, setCuisine] = useState(initialCuisine);
    const [description, setDescription] = useState(initialDescription);
    const [ingredients, setIngredients] = useState(initialIngredients);
    const [instructions, setInstructions] = useState(initialInstructions);
    const [image, setImage] = useState(initialImage)
    const [allergies, setAllergies] = useState(initialAllergies);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name, cuisine, description, ingredients, instructions, image, allergies })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Recipe Name: </label><br />
                <input
                    type="text"
                    value={name} name='name'
                    onChange={(e) => { setName(e.target.value) }}
                />
            </p>
            <p>
                <label>Type of Cuisine: </label><br />
                <input
                    type="text"
                    value={cuisine} name='cuisine'
                    onChange={(e) => { setCuisine(e.target.value) }}
                >
                </input>
            </p>
            <p>
                <label>Description: </label><br />
                <textarea
                    value={description} name='description'
                    onChange={(e) => { setDescription(e.target.value) }}
                />
            </p>
            <p>
                <label>Ingredients: </label><br />
                <textarea
                    value={ingredients} name='ingredients'
                    onChange={(e) => { setIngredients(e.target.value) }}
                />
                {/* <p>Click here to add ingredients</p> */}
            </p>
            <p>
                <label>Instructions: </label><br />
                <textarea
                    value={instructions} name='instructions'
                    onChange={(e) => { setInstructions(e.target.value) }}
                />
                {/* <p>Click here to add instructions</p> */}
            </p>
            <p>
                <label>Image URL: </label><br />
                <input
                    type="text"
                    value={image} name='image'
                    onChange={(e) => { setImage(e.target.value) }}
                />
            </p>
            <p>
                <label>Allergies (optional): </label><br />
                <input
                    type="text"
                    value={allergies} name='allergies'
                    onChange={(e) => { setAllergies(e.target.value) }}
                />
            </p>
            <Link to = '/home'>Cancel</Link>
            <input type="submit" />
        </form>
    )
}
