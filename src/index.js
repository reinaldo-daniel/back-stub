import express from "express";
import cors from "cors";
import appConfig from "./config/appConfig.js";
import users from "./domains/users/routes.js";
import rooms from "./domains/rooms/routes.js"
import controllers from "./domains/disciplines/controllers.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", users);
app.use("/rooms", rooms);
app.use("/disciplines", controllers.disciplines)

app.listen(appConfig.appPort, () => {
    // eslint-disable-next-line no-console
    console.log(`Servidor rodando na porta ${appConfig.appPort}.`);
});
