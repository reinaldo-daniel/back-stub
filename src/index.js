import express from "express";
import appConfig from "./config/appConfig.js";

const app = express();

app.get("/", (request, response, next) => {
    try {
        response.status(200)
            .json({ sucess: "entrou" });
    } catch (error) {
        next(error);
    }
});

app.listen(appConfig.appPort, () => {
    // eslint-disable-next-line no-console
    console.log(`Servidor rodando na porta ${appConfig.appPort}.`);
});
