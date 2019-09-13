exports.seed = function (knex, Promise) {
    return knex('recipes_ingredients').insert([
        { recipe_id: 1, ingredients_id: 1, quantity: .8 },
        { recipe_id: 1, ingredients_id: 3, quantity: .2 },
        { recipe_id: 1, ingredients_id: 4, quantity: .9 },
        { recipe_id: 1, ingredients_id: 6, quantity: .3 },
        { recipe_id: 2, ingredients_id: 1, quantity: .67 },
        { recipe_id: 2, ingredients_id: 2, quantity: .12 },
        { recipe_id: 3, ingredients_id: 6, quantity: .7 },
        { recipe_id: 3, ingredients_id: 7, quantity: .2 },
        { recipe_id: 3, ingredients_id: 5, quantity: .4 },
    ]);
};

