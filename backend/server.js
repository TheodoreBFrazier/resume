//Create dependencies

const app = require("./app.js");

//Configuration

require("dotenv").config();
const PORT = process.env.PORT || 3000

//Listen

app.listen(PORT, () =>{
    console.log(`listening to port ${PORT}`);
});