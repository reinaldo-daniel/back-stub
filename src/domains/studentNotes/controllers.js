async function studentNote(request, response, next) {
    try {
        response.status(200)
            .json({ teste: "acesso ao controller student_note." });
    } catch (error) {
        next(error);
    }
}

export default {
    studentNote,
};
