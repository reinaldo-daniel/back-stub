import { Router } from "express";

import controllers from "./controllers.js";

const router = Router();

router.get("/", controllers.getUsers);

router.post("/create", controllers.createUser);

export default router;
