import React from "react";
import axios from "axios"
import {
    useState,
    useEffect
} from "react";

/* i will need to import a single view */

/* API import */

export default resume() {
    const [job, setJob] = useState([])

    useEffect(() => {
        axios
            .get(API + "/")
            .then((response) => {
                setJob(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    let resumeArray;

    return (
        <div className="resume-data-arr" >
            {resumeArray.map(job) => {
                    return < Positon key={job.job_id} job={job} />
                })}
        </div>
    );


};