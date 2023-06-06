import Users from "./model.js";

async function getUsers(req, res, next) {
    try {
        const users = await Users.query().select("*");
        res.json(users);
    } catch (error) {
        next(error);
    }
}

async function createUser(req, res, next) {
    try {
        const { name, email, password } = req.body;

        const newUser = await Users.query().insert({ name, email, password });

        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
}

export default {
    getUsers,
    createUser,
};
