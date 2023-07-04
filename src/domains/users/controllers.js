import bcrypt from "bcrypt";
import Joi from "joi";
import jwt from "jsonwebtoken";
import { transaction } from "objection";

import jwtConfig from "../../config/jwtConfig";
import errorBadRequest from "../../errors/errorBadRequest";
import Users from "./model.js";
import { adminUserCreate } from "./validators";

async function getUsers(req, res, next) {
    try {
        const users = await Users.query();

        res.json(users);
    } catch (error) {
        next(error);
    }
}

async function createUser(request, response, next) {
    try {
        const { body } = request;
        const { name, email, password } = body;

        Joi.validate(body, adminUserCreate);

        const saltRounds = 10;
        const passwordHash = bcrypt.hashSync(password, saltRounds);

        const newUser = await Users.query(transaction)
            .insert({ name, email, password: passwordHash });

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

export {
    getUsers,
    createUser,
    emailIsUsed,
    refreshToken,
    login,
};
