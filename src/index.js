import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import appConfig from "./config/appConfig.js";

import presences from "./domains/presence/routes.js";
import schedules from "./domains/schedule/routes.js";

import student_note from "./domains/student_notes/model.js";
import user_discipline from "./domains/user_disciplines/model.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/presence", presences);
app.use("/schedule", schedules);

app.use("/student_notes", student_note);
app.use("/user_disciplines", user_discipline);
app.listen(appConfig.appPort, () => {
    // eslint-disable-next-line no-console
    console.log(`Servidor rodando na porta ${appConfig.appPort}.`);
});