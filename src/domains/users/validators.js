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

const adminUserCreate = Joi.object({
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
        .valid(...Object.values(TYPE))
        .required(),
});

const adminUserUpdate = Joi.object({
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
        .valid(...Object.values(TYPE)),

    status: Joi.boolean(),
});

const userUpdate = Joi.object({
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

export {
    loginUserSchema,
    adminUserCreate,
    adminUserUpdate,
    userUpdate,
};
