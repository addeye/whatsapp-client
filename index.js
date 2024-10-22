const express = require("express");

const app = express();

app.use(express.json());
app.post("/:_id/webhook", (req, res, next) => {
    try {
        if (req.body["connection.update"]) {
            const update = req.body["connection.update"];

            console.log(update);

            if (update.qr) {
                console.log(`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(update.qr)}`);
            }
        }
        // if (req.body["creds.update"])console.log(req.body["creds.update"])
        // if (req.body["messaging-history.set"])console.log(req.body["messaging-history.set"])
        // if (req.body["chats.upsert"]) console.log(req.body["chats.upsert"]);
        // if (req.body["chats.update"])console.log(req.body["chats.update"])
        // if (req.body["chats.delete"])console.log(req.body["chats.delete"])
        // if (req.body["labels.association"])console.log(req.body["labels.association"])
        // if (req.body["labels.edit"])console.log(req.body["labels.edit"])
        // if (req.body["presence.update"])console.log(req.body["presence.update"])
        // if (req.body["contacts.upsert"])console.log(req.body["contacts.upsert"])
        // if (req.body["contacts.update"])console.log(req.body["contacts.update"])
        // if (req.body["messages.delete"])console.log(req.body["messages.delete"])
        // if (req.body["messages.update"])console.log(req.body["messages.update"])
        // if (req.body["messages.media-update"])console.log(req.body["messages.media-update"])

        if (req.body["messages.upsert"]) {
            const upsert = req.body["messages.upsert"];

            if (upsert.type === "notify") {
                for (const msg of upsert.messages) {
                    console.log(msg);
                }
            }
        }

        // if (req.body["messages.reaction"])console.log(req.body["messages.reaction"])
        // if (req.body["message-receipt.update"])console.log(req.body["message-receipt.update"])
        // if (req.body["groups.upsert"])console.log(req.body["groups.upsert"])
        // if (req.body["groups.update"])console.log(req.body["groups.update"])
        // if (req.body["group-participants.update"])console.log(req.body["group-participants.update"])
        // if (req.body["blocklist.set"])console.log(req.body["blocklist.set"])
        // if (req.body["blocklist.update"])console.log(req.body["blocklist.update"])
        // if (req.body["call"])console.log(req.body["call"])

        res.json({ message: "OK" });
    } catch (error) {
        next(error);
    }
});

const server = app.listen(3000, "0.0.0.0", () => {
    console.log(server.address());
});