export const up = function up(knex) {
    return knex.schema.createTable("student_note", (table) => {
        table.bigIncrements("id")
            .primary()
            .notNullable();

        table.bigInteger("user_discipline_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("user_discipline");

        table.float("note", 4, 2)
            .unsigned()
            .notNullable();
    });
};

export const down = function down(knex) {
    return knex.schema.dropTable("student_note");
};
