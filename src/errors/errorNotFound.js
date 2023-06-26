export default function notFind(response, message) {
    const messageToSend = message || "Not Found";

    response.status(404)
        .json({ message: messageToSend });
}
