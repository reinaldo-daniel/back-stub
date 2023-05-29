/* eslint-disable camelcase */
async function user_discipline(request, response, next) {
    try {
        response.status(200)
            .json({ teste: "acesso ao controller user_discipline." });
    } catch (error) {
        next(error);
    }
}

export default {
 user_discipline,
};
