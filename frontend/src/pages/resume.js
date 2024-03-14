import React, { useState, useEffect } from "react";
import axios from "axios";

//Material UI Card Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

//Material UI Accordion Imports
import { Accordion } from "@mui/material";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

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
                    <Card key={position.job_id} variant="outlined">
                        <CardContent>
                            <div>
                                <h3> {position.company_name} </h3>
                                <h4> {position.job_title}, {position.start_year} - {position.end_year} </h4>
                                <h4> {position.company_overview} </h4>
                                <ul>
                                    <li>  {position.bullet_point_one} </li>
                                    <li> {position.bullet_point_two} </li>
                                    <li>  {position.bullet_point_three} </li>
                                    <li> {position.bullet_point_four} </li>
                                </ul>
                                <p>Skills used:</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div >
    );
};

export default Resume;