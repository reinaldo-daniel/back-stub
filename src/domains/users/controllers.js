/* eslint-disable */
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import jwtConfig from "../../config/jwtConfig";
import errorBadRequest from "../../errors/errorBadRequest";
import errorNotFound from "../../errors/errorNotFound";
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

function refreshToken(request, response, next) {
    try {
        const { user } = request;

        if (!user) {
            return errorBadRequest(response);
        }

        const token = jwt.sign(user, jwtConfig.jwtSecret);

        return response.status(200)
            .json(token, user);
    } catch (error) {
        return next(error);
    }
}

async function emailIsUsed(request, response, next) {
    const { body } = request;
    const { email } = body;

    try {
        const user = await Users
            .query()
            .findOne({ email });
        if (user) {
            throw new Error(
                "This E-mail is been used by another user.",
                response.status(400),
            );
        }

        response.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

async function login(request, response, next) {
    try {
        response.json({ teste: "Está funcionando a rota" });
    } catch (error) {
        next(error);
    }
}

async function getAllUsers(request, response, next) {
    try {
        const allUsers = await Users.query()
            .where("status", "1")

        response.status(200)
            .json(allUsers);
    } catch (error) {
        next(error);
    }
}

async function getUserById(request, response, next) {
    try {
        const { id } = request.params;

        const user = await Users.query()
            .findById(id)

        if (!user) return errorNotFound(response)

        response.status(200)
            .json(user);
    } catch (error) {
        next(error);
    }
}

async function updateUser(request, response, next) {
    try {
        const { params, body } = request;
        const { id } = params;
        const { name, email, password } = body;

        const userUpdated = await Users.transaction(async transacting => {
            const user = await Users.query()
                .findById(id);

            if (!user) return errorNotFound(response);

            if (password) {
                const isSamePass = bcrypt.compareSync(password, user.password);

                if (isSamePass) {
                    return user.$query(transacting)
                        .updateAndFetch({ name, email })
                }
                const saltRounds = 10;
                const newPassword = bcrypt.hashSync(password, saltRounds);

                return user.$query(transacting)
                    .updateAndFetch({ name, email, password: newPassword })
            }
        })
        response.json(userUpdated)
    }
    catch (error) {
        next(error)
    }
}

export {
    emailIsUsed,
    refreshToken,
    login,
    createUser,
    getAllUsers,
    getUserById,
    updateUser
};
