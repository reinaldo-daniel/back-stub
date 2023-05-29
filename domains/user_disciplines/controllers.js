// eslint-disable-next-line camelcase
async function user_discipline(request, response, next) {
    try {
        response.status(200)
            .json({ teste: "acesso ao controller user_disciplines." });
    } catch (error) {
        next(error);
    }
}

export default {
    // eslint-disable-next-line camelcase
    user_discipline,
};
