/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import RecipeForm from '../../components/FormComponents/RecipeForm';
import ToggleColorMode from '../../components/Themes/ToggleDarkMode';
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
const baseTheme = createTheme();

export default () => {
    const [errors, setErrors] = useState([]);
    const [user, setUser] = useState('')
    const history = useHistory();

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
    }, [history]);

    const createRecipe = (recipe) => {
        console.log(recipe);
        axios.post('http://localhost:8000/api/recipe/new', recipe)
            .then(res => {
                history.push(`/dashboard/${user._id}`);
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
            });
    };
    console.log(user._id);

    return (
        <div>
            <ToggleColorMode currentPage="createRecipe">
                <ThemeProvider theme={baseTheme}>
            
            <RecipeForm
                formName='Create A Recipe'
                onSubmitProp={createRecipe}
                initialName=''
                initialCuisine=''
                initialDescription=''
                initialIngredients=''
                initialInstructions=''
                initialImage=''
                initialAllergies=''
                initialCategory=''
                errors={errors}
                userId={user._id}
                />
                </ThemeProvider>
            </ToggleColorMode>
        </div>
    )
}