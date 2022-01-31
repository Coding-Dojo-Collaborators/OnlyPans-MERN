const { Recipe } = require('../models/onlyPans.model');
module.exports.getRecipe = (request, response) => {
    Recipe.find()
        .then(recipe => response.json(recipe))
        .catch(err => response.json(err))
}
// The method below is new
module.exports.createRecipe = (request, response) => {
    const { name, cuisine, description, ingredients, instructions, image, allergies } = request.body;
    Recipe.create({
        name,
        cuisine,
        description,
        ingredients,
        instructions,
        image,
        allergies
    })
        .then(recipe => response.json(recipe))
        .catch(err => response.status(400).json(err))
}

module.exports.getOneRecipe = (request, response) => {
    Recipe.findOne({ _id: request.params.id })
        .then(recipe => response.json(recipe))
        .catch(err => response.json(err))
}

module.exports.updateRecipe = (request, response) => {
    Recipe.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators : true })
        .then(updatedRecipe => response.json(updatedRecipe))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteRecipe = (request, response) => {
    Recipe.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}