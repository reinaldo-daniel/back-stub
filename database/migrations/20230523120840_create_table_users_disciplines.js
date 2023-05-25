export const up = function up(knex) {
    return knex.schema.createTable("users_disciplines", (table) => {
        table.bigIncrements("id")
            .primary()
            .notNullable();

        table.bigInteger("user_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users");

        table.bigInteger("discipline_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("disciplines");
    });
};

export const down = function down(knex) {
    return knex.schema.dropTable("users_disciplines");
};
