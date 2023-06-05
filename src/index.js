import cors from "cors";
import express from "express";

import appConfig from "./config/appConfig.js";

import presences from "./domains/presence/routes.js";
import schedules from "./domains/schedule/routes.js";

import studentNote from "./domains/student_notes/routes.js";
import userDiscipline from "./domains/user_disciplines/routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/presence", presences);
app.use("/schedule", schedules);
app.use("/studentNotes", studentNote);
app.use("/userDisciplines", userDiscipline);

app.listen(appConfig.appPort, () => {
    console.log(`Servidor rodando na porta ${appConfig.appPort}.`);
});
