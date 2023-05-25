export const up = function up(knex) {
    return knex.schema.createTable("disciplines", (table) => {
        table.bigIncrements("id")
            .primary()
            .notNullable();

        table.string("name", 255)
            .notNullable();

        table.bigInteger("room_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("rooms");
    });
};

export const down = function down(knex) {
    return knex.schema.dropTable("disciplines");
};
