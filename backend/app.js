const express = require("express");
const cors = require("cors");
const resumeController = require("./controllers/careerController")

//configuration
const app = express();

app.use(cors());
app.use(express.json());

app.use("/resume", resumeController);

//HomePage
app.get("/", (request, response) => {
    response.send("Hello World!");
});

//About
app.use("/about", (request, response) => {
 response.send("About Page")
})

//Resume

app.use("/resume", (request, response) => {
    response.send("Resume Page")
})

//Contact
app.use("/contact", (request, response) => {
    response.send("Contact Page")
})

require("dotenv").config();

module.exports = app;