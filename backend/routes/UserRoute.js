const { createUser, getUser, deleteUser, updateUser } = require("../controller/UserController");

const Router = require("express").Router()
Router.post("/create",createUser);
Router.get("/",getUser);
Router.put("/:id",updateUser);
Router.delete("/:id",deleteUser);
module.exports = Router;