import cors from "cors";
import express from "express";
import Knex from "knex";
import morgan from "morgan";
import { Model } from "objection";

import knexConfig from "../database/knexfile";
import appConfig from "./config/appConfig";
import disciplines from "./domains/disciplines/routes";
import presences from "./domains/presence/routes";
import rooms from "./domains/rooms/routes";
import schedules from "./domains/scheduleControl/routes";
import users from "./domains/users/routes";
import authMiddleware from "./middleware/authMiddleware";

Model.knex(Knex(knexConfig));

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(authMiddleware);

app.use("/presence", presences);
app.use("/schedule", schedules);
app.use("/users", users);
app.use("/rooms", rooms);
app.use("/disciplines", disciplines);

app.listen(appConfig.appPort, () => {
    console.info(`Servidor rodando na porta ${appConfig.appPort}.`);
});
