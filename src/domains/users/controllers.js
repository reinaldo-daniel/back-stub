import Users from "./model.js";

const emailIsUsed = (async (request, response, next) => {
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
});

export default {
    emailIsUsed,
};
