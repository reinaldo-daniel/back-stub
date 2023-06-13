import jwt from "jsonwebtoken";

import jsonConfig from "../config/jwtConfig.js";
import Users from "../domains/users/model.js";

function authMiddleware(request, response, next) {
    try {
        const { headers } = request;
        const { authorization } = headers;

        if (!authorization) {
            return response.status(403)
                .json({ message: "Forbidden" });
        }

        const token = authorization.split(" ")[1];

        return jwt.verify(token, jsonConfig.jwtSecret, async (error, decoded) => {
            if (error) {
                return response.status(403)
                    .json({ message: "Forbidden" });
            }

            const verifyUser = await Users.query()
                .findById(decoded.id)
                .where("situaction", true);

            if (!verifyUser) {
                return response.status(403)
                    .json({ message: "Forbidden" });
            }

            request.userId = decoded.id;

            return next();
        });
    } catch (error) {
        return next(error);
    }
}

export default authMiddleware;
