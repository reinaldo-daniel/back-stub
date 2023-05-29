async function users(request, response, next) {
    try {
        response.json({ teste: "acessou o controller de users" });
    } catch (error) {
        next(error);
    }
}

export default {
    users,
};
