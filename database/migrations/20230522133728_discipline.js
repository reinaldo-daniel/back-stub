export const up = function up(knex) {
    return knex.schema.createTable("discipline", (table) => {
        table.bigIncrements("id")
            .primary()
            .notNullable();
        table.string("name", 255)
            .notNullable();
        table.bigInteger("room_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("room");
    });
};

export const down = function down(knex) {
    return knex.schema.dropTable("discipline");
};
