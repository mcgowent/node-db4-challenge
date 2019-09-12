
exports.up = function (knex) {
    return knex.schema
        // Recipes table: id, name
        .createTable('recipes', tbl => {
            tbl.increments() // Sets up recipe Primary Key

            tbl  // Name of Recipe, can not be left blank, must be unique
                .string('name', 125)
                .notNullable()
                .unique()
        })

        // Ingredients table: id, name
        .createTable('ingredients', tbl => {
            tbl.increments() // Sets up ingredients Primary Key

            tbl    // Name of Ingredients, can not be left blank, must be unique
                .string('name', 50)
                .notNullable()
                .unique()
        })
        .creatTable('recipes_ingredients', tbl => {
            tbl
                .integer('recipe_id')
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl
                .integer('ingredients_id')
                .unsigned()
                .references('id')
                .inTable('ingredients')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl
                .float('quantity')
                .notNullable()

            tbl.primary(['recipe_id', 'ingredients_id']) // Sets the Primary key for the table to the unique combo of recipes and ingredients

        })
        .createTable('instructions', tbl => {
            tbl.increments()

            tbl
                .integer('recipe_id')
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes_ingredients')
        .dropTableIfExists('instructions')
};
