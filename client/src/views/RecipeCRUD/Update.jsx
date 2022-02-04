import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory, Link } from 'react-router-dom';
import RecipeForm from '../../components/FormComponents/RecipeForm';
import DeleteButton from '../../components/Buttons/DeleteButton';
import ToggleColorMode from '../../components/Themes/ToggleDarkMode';
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
const baseTheme = createTheme();
const Update = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const [recipe, setRecipe] = useState();
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
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
      .then(res => {
        res.data.userId !== user.id ?
          history.push(``)
          :
          setRecipe(res.data);
        setLoaded(true);
      }).catch(err => {
        history.push(``)
      })
  }, [history, id, user.id]);

  const updateRecipe = recipe => {
    axios.put('http://localhost:8000/api/recipe/edit/' + id, recipe)
      .then(res => {
        console.log(res);
        history.push(`/dashboard/${user._id}`);
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
  // user._id !== recipe.userId && history.push(`/dashboard/${user._id}`)
  // console.log(recipe.userId)

  return (
    <div>

      <ToggleColorMode currentPage="createRecipe">
        <ThemeProvider theme={baseTheme}>
          {loaded && (
            <>
              <RecipeForm
                formName='Update Your Recipe'
                currentPage='update'
                onSubmitProp={updateRecipe}
                initialName={recipe.name}
                initialCuisine={recipe.cuisine}
                initialDescription={recipe.description}
                initialIngredients={recipe.ingredients}
                initialInstructions={recipe.instructions}
                initialImage={recipe.image}
                initialAllergies={recipe.allergies}
                errors={errors}
                recipeId={recipe._id}
              />
            </>
          )}
        </ThemeProvider>
      </ToggleColorMode>

    </div>
  )
}

export default Update;