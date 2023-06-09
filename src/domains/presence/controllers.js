async function presence(request, response, next) {
    try {
        response.status(200);
    } catch (error) {
        next(error);
    }
}

export default {
    presence,
};
