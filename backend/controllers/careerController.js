const express = require("express");
const career = express.Router();

const { getMyWorkHistory } = require("../queries/queries.js")

career.get("/", async (request, response) => {
    const workHistory = await getMyWorkHistory()
    if(workHistory[0]){
        response.status(200).json(workHistory)
        console.log(workHistory)
    } else {
        response.status(500).json({ error: "sorry no jobs!"})
    }
    
})


module.exports = career;