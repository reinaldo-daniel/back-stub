import Users from "./model.js";

async function users(request, response, next) {
    try {
        response.json({ teste: "acessou o controller de users" });
    } catch (error) {
        next(error);
    }
}

function findUserByEmail(email) {
    return Users.query().findOne({ email });
}

async function emailIsUsed(request, response) {
    try {
        const { email } = request.body;
        const user = await findUserByEmail(email);
        if (user) {
            return response.status(404).json({
                mensage: "Já existe um cadastro com esse e-mail. Por gentileza, tente novamente.",
            });
        }

        return response.status(200).send();
    } catch (err) {
        return response.json(err);
    }
}

export default {
    users,
    emailIsUsed,
};
