import React, { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Resume() {
    const [resumeData, setResumeData] = useState([]);

    useEffect(() => {
        axios
            .get(`${API}/resume`)
            .then((response) => {
                setResumeData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="resume">
            <style>
                {`
                .resume {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 0;
                    display: flex;
                }

                .left-column {
                    width: 35%;
                    height: 100vh;
                }

                .right-column {
                    width: 60%;
                    height: 100vh;
                    overflow-y: auto;
                }

                .right-column::-webkit-scrollbar {
                    width: 12px;
                }

                .right-column::-webkit-scrollbar-thumb {
                    background-color: #888;
                    border-radius: 10px;
                }

                .right-column::-webkit-scrollbar-track {
                    background-color: #f1f1f1;
                    border-radius: 10px;
                }
            `}
            </style>
            <div className="left-column">
                <h2>Resume</h2>
                <ul>
                    <li>theo@theodorefrazier.com</li>
                    <li>(917) 403-0173</li>
                    <li>linkedin.com/in/yourprofile</li>
                </ul>
            </div>
            <div className="right-column">
                {resumeData.map((position) => (
                    <div key={position.job_id}>
                        {position.job_title}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Resume;