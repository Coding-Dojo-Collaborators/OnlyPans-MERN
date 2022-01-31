import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form from '../../components/RecipeComponents/Form';

export default () => {
    const history = useHistory();
    const [errors, setErrors] = useState([]);

    const createRecipe = recipe => {
        axios.post('http://localhost:8000/api/recipe/new', recipe)
            .then(res => {
                history.push('/home');
            })
            .catch(err => {
                console.log(err.response.data.errors)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    
    return (
        <div>
            <Link to = '/home'>Home</Link>
            <Form
                onSubmitProp={createRecipe}
                initialName=''
                initialCuisine=''
                initialDescription=''
                iniitalIngredients=''
                initialInstructions=''
                initialImage=''
                initialAllergies=''
                errors = {errors}
            />
        </div>
    )
}