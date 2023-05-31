async function disciplines(request, response, next) {
    try {
        response.json({ message: "Está funcionando o controller de disciplines" });
    } catch (error) {
        next(error);
    }
}

export default {
    disciplines,
};
