import jwt from "jsonwebtoken";

import jwtConfig from "../../config/jwtConfig";
import errorBadRequest from "../../errors/errorBadRequest";
import Users from "./model";

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
        const { body: userData } = req;

        const newUser = await Users.query()
            .insert(userData);

        res.status(201).json(newUser);
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

export {
    emailIsUsed,
    refreshToken,
    login,
    getUsers,
    createUser,
};
