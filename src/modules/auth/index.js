const router = require("express").Router();
const controller = require("./controller");

module.exports = {
    configure: ({ app }) => {
        router.post("/signup", controller.signup);
        router.post("/signin", controller.signin);

        return router;
    },
};