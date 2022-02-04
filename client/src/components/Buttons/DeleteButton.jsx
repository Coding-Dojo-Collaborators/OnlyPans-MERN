/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

export default props => {
  const { recipeId, successCallback } = props;

  const deleteRecipe = e => {
    axios.delete('http://localhost:8000/api/recipe/delete/' + recipeId)
      .then(res => {
        successCallback();
      });
  };

  return (
    <Button
      onClick={deleteRecipe}
      Delete Recipe
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Delete
    </Button>
  );
};