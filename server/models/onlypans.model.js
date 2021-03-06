const mongoose = require('mongoose');
const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Recipe is required'
        ]
    },
    category:  {
        type : String,
        required : true
    },
    cuisine: {
        type: String,
        required: [
            true,
            'Type of Cuisine is required'
        ]
    },
    description: {
        type: String,
        required: [
            true,
            'Description is required'
        ]
    },
    ingredients: {
        type: String,
        required: [
            true,
            'Ingredients are required'
        ]
    },
    instructions: {
        type: String,
        required: [
            true,
            'Instructions are required'
        ]
    },
    image: {
        type: String,
        required: [
            true,
            'Image is required'
        ]
    },
    userId : {
        type : String,
        required: true
    },
    favoritedUsers : {
        type : Array
    },
    allergies: {
        type: String
    }
}, { timestamps: true });
module.exports.Recipe = mongoose.model('Recipe', RecipeSchema);