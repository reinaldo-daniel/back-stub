import { Router } from "express";
import controller from "./controllers.js";

const router = Router();

router.get("/", controller.presence);

export default router;
