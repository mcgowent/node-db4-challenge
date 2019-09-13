const express = require('express');
const Recipes = require('./recipe-model');
const router = express.Router();

// Returns a list of all recipes in the database
router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get Recipes' });
        });
})

// Returns a list of all ingredients for a recipe 
router.get('/:id/ingredients', (req, res) => {
    const { id } = req.params

    Recipes.getShoppingList(id)
        .then(steps => {
            if (steps.length) {
                res.json(steps);
            } else {
                res.status(404).json({ message: 'Could not find the ingredients for Recipe given' })
            }
        })
        .catch(err => {

            res.status(500).json(err);
        });
})

// Returns a list of all intructions for a recipe
router.get('/:id/intructions', (req, res) => {
    const { id } = req.params

    Recipes.getIntructions(id)
        .then(steps => {
            if (steps.length) {
                res.json(steps);
            } else {
                res.status(404).json({ message: 'Could not find the intructions for Recipe given' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve info' });
        });
})

module.exports = router;