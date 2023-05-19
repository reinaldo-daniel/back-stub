export const up = function (knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("id");
        table.string("first_name", 255)
            .notNullable();
        table.string("last_name", 255)
            .notNullable();
    });
};

export const down = function (knex) {
    return knex.schema.dropTable("users");
};
