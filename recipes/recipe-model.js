const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getIntructions
}

// - `getRecipes()`: should return a list of all recipes in the database.
// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

function getRecipes() {
    return db('recipes')
}

// function getShoppingList(recipe_id) {
//     return db('recipes_ingredients as r')
//         .join('ingredients as i', 'i.name' )
//         .where('')
// }

function getShoppingList(id) {
    return db('recipes_ingredients as r')
        .join('ingredients as i', 'r.ingredients_id', 'i.id')
        .where({ recipe_id: id })
        .select('i.name', 'r.quantity')
}


function getIntructions(id) {
    return db('recipes as s')
        .join('instructions as i', 's.id', 'i.recipe_id')
        .where({ recipe_id: id })
        .select('i.steps_number', 'i.instructions')
}

