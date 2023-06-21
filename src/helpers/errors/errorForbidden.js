export default function fobidden(response, message) {
    const messageToSend = message || "Forbidden";

    response.status(403)
        .json({ 403: messageToSend });
}
