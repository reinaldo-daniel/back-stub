import dotenv from "dotenv";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const caminho = dirname(filename);

dotenv.config({ path: resolve(caminho, "../../.env") });

const { env: environment } = process;

const databaseConfig = {
    mysqlHost: environment.MYSQL_HOST,
    mysqlPort: environment.MYSQL_PORT,
    mysqlUser: environment.MYSQL_USER,
    mysqlPass: environment.MYSQL_PASS,
    mysqlDbname: environment.MYSQL_DBNAME,
};

export default databaseConfig;
