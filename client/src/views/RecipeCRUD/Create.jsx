import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form from '../../components/FormComponents/Form';

export default () => {
    const history = useHistory();
    const [errors, setErrors] = useState([]);

    const [user, setUser] = useState('')

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setUser(res.data)
            })
            .catch(err => {
                history.pushState('/')
                console.log("noUser logged in")
            });
    }, []);

    const createRecipe = (recipe) => {
        console.log(recipe);
        axios.post('http://localhost:8000/api/recipe/new', recipe )
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
    console.log(user._id);
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Form
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
        </div>
    )
}