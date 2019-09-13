exports.seed = function (knex, Promise) {
    return knex('ingredients').insert([
        { name: 'Cheese' }, // 1
        { name: 'Bread' },  // 2
        { name: 'Beef' },   // 3
        { name: 'Taco Shell' },  //4
        { name: 'Chicken' }, // 5
        { name: 'Lettuce' },  // 6
        { name: 'Ranch Dressing' } // 7
    ]);
};
