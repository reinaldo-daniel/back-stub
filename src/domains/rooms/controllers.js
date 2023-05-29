async function rooms(request, response, next) {
    try {
        response.json({ teste: "Entrou no controllers" });
    } catch (error) {
        next(error);
    }
}

export default {
    rooms,
};
