import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default ({ initialName, initialCuisine,
    initialDescription, initialIngredients, initialInstructions, 
    initialImage, initialAllergies,onSubmitProp, errors, initialCategory, userId}) => {
    
    const [name, setName] = useState(initialName);
    const [cuisine, setCuisine] = useState(initialCuisine);
    const [description, setDescription] = useState(initialDescription);
    const [ingredients, setIngredients] = useState(initialIngredients);
    const [instructions, setInstructions] = useState(initialInstructions);
    const [image, setImage] = useState(initialImage)
    const [allergies, setAllergies] = useState(initialAllergies);
    const [category, setCategory] = useState(initialCategory)
    // const [userId, setUserId] = useState(user._id)
    const [favoritedUsers, setFavoritedUsers] = useState([])
    console.log(userId);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ 
            name : name,
             cuisine : cuisine,
              description : description, 
            ingredients : ingredients, 
            instructions : instructions, 
            image : image,
             userId : userId,
              category : category,
              favoritedUsers : favoritedUsers, 
              allergies : allergies })
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
            <div>
                <select name="catergory" id="category" onChange={(e) => setCategory(e.target.value)}>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="quick">Quick And Easy</option>
                    <option value="wineAndDine">Wine And Dine</option>
                    <option value="bakedGoods">Baked Goods</option>
                </select>
            </div>
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
