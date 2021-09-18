const express = require("express");

//To create api/route
const route = express.Router();
const trnslatetextController = require("../Controllers/textTranslator");

route.post('/translatetext', trnslatetextController.TranslateInputText);

module.exports = route;