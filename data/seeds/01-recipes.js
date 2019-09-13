exports.seed = function (knex, Promise) {
    return knex('recipes').insert([
        { name: 'Taco' }, // 1
        { name: 'Grilled Cheese' }, // 2
        { name: 'Chicken Salad' } // 3
    ]);
};
