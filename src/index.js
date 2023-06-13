import cors from "cors";
import express from "express";
import Knex from "knex";
import { Model } from "objection";

import knexConfig from "../database/knexfile.js";
import appConfig from "./config/appConfig.js";
import disciplines from "./domains/disciplines/routes.js";
import presences from "./domains/presence/routes.js";
import rooms from "./domains/rooms/routes.js";
import schedules from "./domains/scheduleControl/routes.js";
import users from "./domains/users/routes.js";
import authMiddleware from "./middleware/authMiddleware.js";

Model.knex(Knex(knexConfig));

const app = express();

app.use(cors());
app.use(express.json());

app.use("/presence", authMiddleware, presences);
app.use("/schedule", authMiddleware, schedules);
app.use("/users", authMiddleware, users);
app.use("/rooms", authMiddleware, rooms);
app.use("/disciplines", authMiddleware, disciplines);

app.listen(appConfig.appPort, () => {
    // eslint-disable-next-line no-console
    console.log(`Servidor rodando na porta ${appConfig.appPort}.`);
});
