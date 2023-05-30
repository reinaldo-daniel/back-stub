async function presence(request, response, next) {
    try {
        response.status(200)
            .json({ teste: "acesso ao controller presence." });
    } catch (error) {
        next(error);
    }
}

export default {
    presence,
};
