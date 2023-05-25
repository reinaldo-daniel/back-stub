export const up = function up(knex) {
    return knex.schema.createTable("rooms", (table) => {
        table.bigIncrements("id")
            .primary()
            .notNullable();

        table.bigInteger("number");
    });
};

export const down = function down(knex) {
    return knex.schema.dropTable("rooms");
};
