import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import appConfig from "./config/appConfig.js";

import presences from "./domains/presence/routes.js";
import schedules from "./domains/schedule/routes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/presence", presences);
app.use("/schedule", schedules);

app.listen(appConfig.appPort, () => {
    // eslint-disable-next-line no-console
    console.log(`Servidor rodando na porta ${appConfig.appPort}.`);
});
