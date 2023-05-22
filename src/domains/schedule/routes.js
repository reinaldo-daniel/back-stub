import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
    response.status(200)
        .send({ teste: "rota schedule" });
});

export default router;
