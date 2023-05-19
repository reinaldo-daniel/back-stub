import { knex } from "../knexfile.js";

export async function seed() {
    // Realize as operações de inserção de dados aqui
    await knex("users").insert([
        { first_name: "John", last_name: "Doe" },
        { first_name: "Jane", last_name: "Smith" },
    ]);
}
