const express = require("express");
const career = express.Router();

career.get("/", (request, response) => {
    request.json({ status: "ok"});
})

module.exports = career;