export const up = function up(knex) {
    return knex.schema.createTable("presences", (table) => {
        table.bigIncrements("id")
            .primary()
            .notNullable();

        table.bigInteger("user_discipline_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users_disciplines");

        table.boolean("first_hour");

        table.boolean("second_hour");

        table.boolean("third_hour");

        table.boolean("fourth_hour");

        table.date("date")
            .notNullable();
    });
};

export const down = function down(knex) {
    return knex.schema.dropTable("presences");
};
