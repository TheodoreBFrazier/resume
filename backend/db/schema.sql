DROP DATABASE IF EXISTS data_dev;

CREATE DATABASE data_dev;

\c data_dev;

-- for all jobs
CREATE TABLE jobs (
    job_id SERIAL PRIMARY KEY,
    company_name VARCHAR(255),
    job_title VARCHAR(255),
    start_year INTEGER,
    end_year INTEGER,
    company_overview TEXT,
    bullet_point_one TEXT,
    bullet_point_two TEXT,
    bullet_point_three TEXT,
    bullet_point_four TEXT,
    skill_one TEXT,
    skill_two TEXT,
    skill_three TEXT,
    skill_four TEXT,
    skill_five TEXT,
    skill_six TEXT,
    skill_seven TEXT,
    skill_eight TEXT
);
