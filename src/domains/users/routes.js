import { Router } from "express";

import {
    createUser, login, getUserById, getAllUsers, updateUser,
} from "./controllers";

const router = Router();

router.post("/create", createUser);
router.get("/list-users", getAllUsers);
router.get("/list-users/:id", getUserById);
router.post("/login", login);
router.put("/update/:id", updateUser);

export default router;
