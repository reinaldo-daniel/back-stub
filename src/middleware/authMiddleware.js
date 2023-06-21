import jwt from "jsonwebtoken";

import jwtConfig from "../config/jwtConfig.js";
import Users from "../domains/users/model.js";
import errorUnauthorized from "../helpers/errors/errorUnauthorized.js";

function authMiddleware(request, response, next) {
    try {
        const { headers } = request;
        const { authorization } = headers;

        if (!authorization) {
            return errorUnauthorized(response);
        }

        const token = authorization.split(" ")[1];

        return jwt.verify(token, jwtConfig.jwtSecret, async (error, decoded) => {
            if (error) {
                return errorUnauthorized(response);
            }

            const user = await Users.query()
                .findById(decoded.id)
                .where("status", true);

            if (!user) {
                return errorUnauthorized(response);
            }

            request.user = user;

            return next();
        });
    } catch (error) {
        return next(error);
    }
}

export default authMiddleware;
