async function schedule(request, response, next) {
    try {
        response.status(200)
            .json({ teste: "acesso ao controller schedule." });
    } catch (error) {
        next(error);
    }
}

export default {
    schedule,
};
