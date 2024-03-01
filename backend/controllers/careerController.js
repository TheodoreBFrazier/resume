const express = require("express");
const resume = express.Router();

const {
    getJobs
} = require("../queries/queries.js");

resume.get("/", async (request, response) => {
const allJobs = await getJobs()
if (allJobs[0] ) {
    response.status(200).json(allJobs);
    console.log(allJobs)
} else {
 response.status(500).json({ error: "error"})
}
})


module.exports = resume;