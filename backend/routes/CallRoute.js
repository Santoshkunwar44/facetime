const { createCall, getCall, deleteCall, updateCall } = require("../controller/CallController");

const Router = require("express").Router()
Router.post("/create",createCall);
Router.get("/",getCall);
Router.put("/:id",updateCall);
Router.delete("/:id",deleteCall);
module.exports = Router;