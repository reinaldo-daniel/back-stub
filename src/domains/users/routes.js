import { Router } from "express";

import controllers from "./controllers.js";

const router = Router();

router.post("/create", controllers.createUser);
router.get("/listUsers", controllers.listAllUsers);
router.get("/listUsers/:id", controllers.listUserById);

export default router;
