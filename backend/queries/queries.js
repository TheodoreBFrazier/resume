const db = require("../db/dbConfig.js");

const getJobs = async () => {
    try {
        const myJobs = await db.many("SELECT * FROM jobs");
        console.log(myJobs)
        return myJobs;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw error;
    }
};

module.exports = { getJobs }