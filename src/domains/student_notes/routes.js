import { Router } from "express";
import controller from "./controllers.js";

const router = Router();

router.get("/", controller.studentNote);

export default router;
