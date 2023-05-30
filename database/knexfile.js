import path from "path";
import dotenv from "dotenv";
import { Model } from "objection";

dotenv.config({ path: path.resolve("../.env") });

const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASS,
    MYSQL_DBNAME,
} = process.env;

const knexConfig = {
    client: "mysql2",
    debug: true,
    connection: {
        host: MYSQL_HOST,
        port: MYSQL_PORT,
        user: MYSQL_USER,
        password: MYSQL_PASS,
        database: MYSQL_DBNAME,
    },
    migrations: {
        tableName: "knex_migrations",
        directory: "./migrations",
        stub: "migration.stub",
    },
    seeds: {
        directory: "./seeds",
        stub: "seed.stub",
    },
};

Model.knex(knexConfig);

export default knexConfig;
