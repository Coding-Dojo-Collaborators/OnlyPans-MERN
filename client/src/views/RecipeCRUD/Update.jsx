import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory, Link } from 'react-router-dom';
import Form from '../../components/FormComponents/Form';
import DeleteButton from '../../components/Buttons/DeleteButton';

const Update = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const [recipe, setRecipe] = useState();
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/recipe/' + id)
      .then(res => {
        setRecipe(res.data);
        setLoaded(true);
      })
  }, []);

  const updateRecipe = recipe => {
    axios.put('http://localhost:8000/api/recipe/edit/' + id, recipe)
      .then(res => {
        console.log(res);
        history.push('/home');
      })
      .catch(err => {
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
      <Link to='/home'>Home</Link>
      <h1>Edit a Recipe</h1>
      {loaded && (
        <>
          <Form
            onSubmitProp={updateRecipe}
            initialName={recipe.name}
            initialCuisine={recipe.cuisine}
            initialDescription={recipe.description}
            initialIngredients={recipe.ingredients}
            initialInstructions={recipe.instructions}
            initialImage={recipe.image}
            initialAllergies={recipe.allergies}
            errors={errors}
          />
          <DeleteButton
            recipeId={recipe._id}
            successCallback={() => history.push('/')}
          />
        </>
      )}
    </div>
  )
}

export default Update;