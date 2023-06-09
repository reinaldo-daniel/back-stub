import bcrypt from "bcrypt";

import Users from "./model.js";

async function getUsers(req, res, next) {
    try {
        const users = await Users.query();

        res.json(users);
    } catch (error) {
        next(error);
    }
}

async function createUser(req, res, next) {
    try {
        const { body } = req;
        const { name, email } = body;

        const saltRounds = 10;
        const password = bcrypt.hashSync(body.password, saltRounds);

        const newUser = await Users
            .query()
            .insert({ name, email, password });
        res.status(201)
            .json(newUser);
    } catch (error) {
        next(error);
    }
}

export default {
    getUsers,
    createUser,
};
