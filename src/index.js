
import cors from "cors";
import express from "express";

import appConfig from "./config/appConfig.js";

import presences from "./domains/presence/routes.js";
import schedules from "./domains/schedule/routes.js";

import StudentNote from "./domains/student_notes/model.js";
import UserDiscipline from "./domains/user_disciplines/model.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/presence", presences);
app.use("/schedule", schedules);

app.use("/student_notes", StudentNote);
app.use("/user_disciplines", UserDiscipline);
app.listen(appConfig.appPort, () => {
    // eslint-disable-next-line no-console
    console.log(`Servidor rodando na porta ${appConfig.appPort}.`);
});
