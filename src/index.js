import cors from "cors";
import express from "express";
import Knex from "knex";
import { Model } from "objection";

import knexConfig from "../database/knexfile";
import appConfig from "./config/appConfig";
import disciplines from "./domains/disciplines/routes";
import presences from "./domains/presence/routes";
import rooms from "./domains/rooms/routes";
import schedules from "./domains/scheduleControl/routes";
import users from "./domains/users/routes";

Model.knex(Knex(knexConfig));

const app = express();

app.use(cors());
app.use(express.json());

app.use("/presence", presences);
app.use("/schedule", schedules);
app.use("/users", users);
app.use("/rooms", rooms);
app.use("/disciplines", disciplines);

app.listen(appConfig.appPort, () => {
    // eslint-disable-next-line no-console
    console.log(`Servidor rodando na porta ${appConfig.appPort}.`);
});
