import bcrypt from "bcrypt";

import Users from "./model.js";

async function createUser(request, response, next) {
    try {
        const { body } = request;
        const { name, email } = body;

        const saltRounds = 10;
        const password = bcrypt.hashSync(body.password, saltRounds);

        const newUser = await Users
            .query()
            .insert({ name, email, password });

        response.status(201)
            .json(newUser);
    } catch (error) {
        next(error);
    }
}

async function listAllUsers(request, response, next) {
    try {
        const allUsers = await Users.query()
            .select("*");
        response.status(200).json({ allUsers });
    } catch (error) {
        next(error);
    }
}

async function listUserById(request, response, next) {
    const { id } = request.params;
    try {
        const user = await Users.query()
            .select("*")
            .where("id", id);
        if (user.length === 0) throw new Error("Não existe usuário vinculado a esse id");

        response.status(200)
            .json(user);
    } catch (error) {
        response.status(404);
        next(error);
    }
}

export default {
    createUser,
    listAllUsers,
    listUserById,
};
