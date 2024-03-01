const db = require("../db/dbConfig.js");

const firstJob = async () => {
    try {
        const firstJob = await db.any("SELECT * job_one");
        console.log(firstJob)
        return firstJob;
    } catch (error) {
        return error
    }
};

const secondJob = async () => {
    try {
        const firstJob = await db.any("SELECT * job_two");
        console.log(secondJob)
        return secondJob;
    } catch (error) {
        return error
    }
};

const thirdJob = async () => {
    try {
        const thirdJob = await db.any("SELECT * job_three");
        console.log(thirdJob)
        return thirdJob;
    } catch (error) {
        return error
    }
};

const forthJob = async () => {
    try {
        const forthJob = await db.any("SELECT * job_four");
        console.log(forthJob)
        return forthJob;
    } catch (error) {
        return error
    }
};

const fifthjob = async () => {
    try {
        const fifthjob = await db.any("SELECT * job_five");
        console.log(fifthjob)
        return fifthjob;
    } catch (error) {
        return error
    }
};

module.exports = { firstJob, secondJob, thirdJob, forthJob, firstJob}