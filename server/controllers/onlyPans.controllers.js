const { request } = require('express');
const { Recipe } = require('../models/onlypans.model');
module.exports.getRecipe = (request, response) => {
    Recipe.find()
        .then(recipe => response.json(recipe))
        .catch(err => response.json(err))
}
// The method below is new
module.exports.createRecipe = (request, response) => {
    Recipe.create(request.body)
        .then(recipe => response.json(recipe))
        .catch(err => response.status(400).json(err))
}

module.exports.getOneRecipe = (request, response) => {
    Recipe.findOne({ _id: request.params.id })
        .then(recipe => response.json(recipe))
        .catch(err => response.json(err))
}

module.exports.updateRecipe = (request, response) => {
    Recipe.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then(updatedRecipe => response.json(updatedRecipe))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteRecipe = (request, response) => {
    Recipe.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.searchByCategory = (request, response) => {
    Recipe.find({ 'Recipe.category': request.params.category })
        .then(category => response.json(category))
        .catch(err => response.json(err))
}

module.exports.getAllRecipeByUser = (request, response) => {
    Recipe.find({ 'userId': request.params.userId })
        .then(userRecipes => response.json(userRecipes))
        .catch(err => response.json(err))
}

module.exports.RecipeSortByAlphabetical = (request, response) => {
    Recipe.find().sort({ category: 1 })
        .then(sortedRecipes => response.json(sortedRecipes))
        .catch(err => response.json(err))

}