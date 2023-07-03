import { Router } from "express";

import { createUser, getUsers, login } from "./controllers";

const router = Router();

router.get("/", getUsers);

router.post("/create", createUser);
router.post("/login", login);

export default router;
