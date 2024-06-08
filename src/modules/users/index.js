const router = require("express").Router();
const controller = require("./controller");
const authGuard = require("../../../middleware/authGuard");

module.exports = {
    configure: ({ app }) => {
        router.use(authGuard);
        router.get("/", controller.getUsers);
        router.get("/:id", controller.getUserById);

        return router;
    },
};