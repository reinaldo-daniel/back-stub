import dotenv from "dotenv";

dotenv.config();

const { env: environment } = process;

const jsonConfig = {
    jwtSecret: environment.JWT_SECRET,
};

export default jsonConfig;
