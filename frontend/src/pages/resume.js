import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

//Material UI Card Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

//Material UI Accordion Imports
import { Accordion } from "@mui/material";
//import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import Button from "@mui/material/Button";

const API = process.env.REACT_APP_API_URL;

function Resume() {
    const [resumeData, setResumeData] = useState([]);



    //retriving API data
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
                    display: flex;
                    flex-direction: column;
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

                .card {
                    margin-bottom: 30px;
                }

                .card-container {
                    flex: 1;
                    height:  70vh;
                    margin-top: 200px;
                }

                .card-content {
                    height: 60vh;
                }

                .vertical-line {
                    background-image: linear-gradient(135deg, #97ABFF 10%, #123597 100%);
                    width: 3px;
                    position: absolute;
                    height: 100vh;
                    left: 40%; 
                    z-index: -1;
                    top: 200px;
                }

                .animate-vertical-line {
                    height: 100vh;
                  }

                .circle {
                    width: 10px;
                    height: 10px; 
                    border: 2px solid black; 
                    border-radius: 50%; 
                    position: fixed;
                    left: calc(35% - 5px); 
                    top: 230px; 
                }

                .circle {
                    width: 10px;
                    height: 10px;
                    border: 2px solid black;
                    border-radius: 50%;
                    position: absolute;
                    left: calc(35% - 5px);
                }

            `}
            </style>

            <div className="circle"></div>
            <div className="left-column">
                <ul>
                    <li>theo@theodorefrazier.com</li>
                    <li>(917) 403-0173</li>
                    <li>linkedin.com/in/yourprofile</li>
                </ul>
            </div>
            <div className="right-column">
                <div className="title-container">
                    <div className="vertical-line"></div>
                    <div className="resume-title">
                        <h1>Resume</h1>
                    </div>
                </div>
                <div className="card-container">
                    {resumeData.map((position) => (
                        <Card key={position.job_id} variant="outlined" className="card">
                            <CardContent className="card-content">
                                <div>
                                    <h3> {position.company_name} </h3>
                                    <h4> {position.job_title}, {position.start_year} - {position.end_year} </h4>
                                    <h4> {position.company_overview} </h4>
                                    <ul>
                                        {position.bullet_point_one && <li>{position.bullet_point_one}</li>}
                                        {position.bullet_point_two && <li>{position.bullet_point_two}</li>}
                                        {position.bullet_point_three && <li>{position.bullet_point_three}</li>}
                                        {position.bullet_point_four && <li>{position.bullet_point_four}</li>}
                                    </ul>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="skills-header"
                                        >
                                            <p>Skills used:</p>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {position.skill_one}
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Resume;