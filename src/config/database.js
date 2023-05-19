import dotenv from "dotenv";

dotenv.config();

const { env: environment } = process;

const databaseConfig = {
    mysqlHost: environment.MYSQL_HOST,
    mysqlPort: environment.MYSQL_PORT,
    mysqlUser: environment.MYSQL_USER,
    mysqlPass: environment.MYSQL_PASS,
    mysqlDbname: environment.MYSQL_DBNAME,
};

export default databaseConfig;
