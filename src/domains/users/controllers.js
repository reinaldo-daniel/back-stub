import Validators from "./validators.js";

async function users(request, response, next) {
    const { body } = request;

    try {
        const { error } = Validators.loginUserSchema.validate(body);

        if (error) {
            throw new Error(error);
        }

        response.send(201);
    } catch (error) {
        next(error);
    }
}

export default {
    users,
};
