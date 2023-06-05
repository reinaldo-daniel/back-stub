import dotenv from "dotenv";

dotenv.config();
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
        directory: "./database/migrations",
        stub: "./database/migration.stub",
    },
    seeds: {
        directory: "./database/seeds",
        stub: "./database/seed.stub",
    },
};

export default knexConfig;
