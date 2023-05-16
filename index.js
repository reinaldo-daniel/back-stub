import express from "express";

const app = express();
const port = 3000;

app.get("/", (request, response, next) => {
	try {
		response.status(200)
			.json({sucess: "entrou"});
	} catch (error) {
		next(error);
	}
});

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}.`);
});
