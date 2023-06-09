import Validators from "./validators.js";

async function users(request, response, next) {
    const { body } = request;

    try {
        const { error, value } = Validators.loginUserSchema.validate(body);

        if (!value) {
            throw new Error(error);
        }
        response.send(body);
    } catch (error) {
        next(error);
    }
}

export default {
    users,
};
