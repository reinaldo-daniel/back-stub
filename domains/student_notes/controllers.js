// eslint-disable-next-line camelcase
async function student_note(request, response, next) {
    try {
        response.status(200)
            .json({ teste: "acesso ao controller student_notes." });
    } catch (error) {
        next(error);
    }
}

export default {
    // eslint-disable-next-line camelcase
    student_note,
};
