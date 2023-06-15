import { Router } from "express";

import controllers from "./controllers";

const router = Router();

router.get("/", controllers.rooms);

export default router;
