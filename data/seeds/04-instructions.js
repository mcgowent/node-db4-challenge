exports.seed = function (knex, Promise) {
    return knex('instructions').insert([
        { recipe_id: 1, steps_number: 1, instructions: 'Take the meat and cook it' },
        { recipe_id: 1, steps_number: 2, instructions: 'Put the meat into the Taco' },
        { recipe_id: 1, steps_number: 3, instructions: 'Eath the Taco' },
        { recipe_id: 2, steps_number: 1, instructions: 'Find bread and cheese' },
        { recipe_id: 2, steps_number: 2, instructions: 'Put the Cheese on the bread and cook it' },
        { recipe_id: 2, steps_number: 3, instructions: 'Eat the Grilled Cheese' },
        { recipe_id: 3, steps_number: 1, instructions: 'Find some green stuff called lettuce' },
        { recipe_id: 3, steps_number: 2, instructions: 'Cut it into small eatable bites' },
        { recipe_id: 3, steps_number: 3, instructions: 'Put way to much ranch dressing and consume it' },
    ]);
};