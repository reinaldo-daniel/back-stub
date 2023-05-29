export const up = function up(knex) {
    return knex.schema.createTable("schedules_controls", (table) => {
        table.bigIncrements("id")
            .primary()
            .notNullable();

        table.bigInteger("room_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("rooms");

        table.bigInteger("discipline_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("disciplines");

        table.timestamps();
    });
};

export const down = function down(knex) {
    return knex.schema.dropTable("schedules_controls");
};
