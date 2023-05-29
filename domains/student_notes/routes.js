import { Router } from "express";
import controller from "./controllers";

const router = Router();

router.get("/", controller.student_note);

export default router;
