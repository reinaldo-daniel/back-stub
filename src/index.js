
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

app.use("/studentNotes", StudentNote);
app.use("/userDisciplines", UserDiscipline);
app.listen(appConfig.appPort, () => {
    console.log(`Servidor rodando na porta ${appConfig.appPort}.`);
});
