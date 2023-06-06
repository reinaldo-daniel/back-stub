import Joi from "joi";

const TYPE = {
    ADM: "ADM",
    STUDENT: "STUDENT",
    EMPLOYEE: "EMPLOYEE",
};

const loginUserSchema = Joi.object({
    email: Joi.string()
        .trim()
        .email()
        .lowercase(),

    password: Joi.string()
        .trim()
        .min(6)
        .max(200),
});

const userRegister = Joi.object({
    name: Joi.string()
        .trim()
        .max(100)
        .required(),

    email: Joi.string()
        .trim()
        .email()
        .required(),

    password: Joi.string()
        .trim()
        .max(80)
        .required(),

    type: Joi.string()
        .valid(TYPE)
        .required(),
});

const userUpdatePerfil = Joi.object({
    name: Joi.string()
        .trim()
        .max(100),

    email: Joi.string()
        .trim()
        .email(),

    password: Joi.string()
        .trim()
        .max(80),
});

const userUpdateRegister = Joi.object({
    name: Joi.string()
        .trim()
        .max(100),

    email: Joi.string()
        .trim()
        .email(),

    password: Joi.string()
        .trim()
        .max(80),

    type: Joi.string()
        .valid(TYPE),

    situaction: Joi.boolean(),
});

export default {
    loginUserSchema,
    userRegister,
    userUpdateRegister,
    userUpdatePerfil,
};
