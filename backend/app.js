const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());


//HomePage
app.get("/", (request, response) => {
    response.send("Hello World!");
});

//About
app.use("/about")

//Resume

app.use("/resume")

//Contact
app.use("/contact")

app.listen(3003);

module.exports = app;