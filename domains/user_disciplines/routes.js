import { Router } from "express";
import controller from "./controllers";

const router = Router();

router.get("/", controller.user_discipline);

export default router;
