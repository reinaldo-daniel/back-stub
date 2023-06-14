import jwt from "jsonwebtoken";

import jsonConfig from "../config/jwtConfig.js";
import Users from "../domains/users/model.js";
import errorForbidden from "../helpers/errors/errorForbidden.js";

function authMiddleware(request, response, next) {
    try {
        const { headers } = request;
        const { authorization } = headers;

        if (!authorization) {
            return errorForbidden(response);
        }

        const token = authorization.split(" ")[1];

        return jwt.verify(token, jsonConfig.jwtSecret, async (error, decoded) => {
            if (error) {
                return errorForbidden(response);
            }

            const user = await Users.query()
                .findById(decoded.id)
                .where("status", true);

            if (!user) {
                return errorForbidden(response);
            }

            request.userId = user;

            return next();
        });
    } catch (error) {
        return next(error);
    }
}

export default authMiddleware;
