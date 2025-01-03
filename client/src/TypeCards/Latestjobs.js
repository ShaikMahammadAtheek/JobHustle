import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../TypeCardsStyle/Latestjobs.css'; // Ensure the path to your CSS file is correct
import { Link } from 'react-router-dom';

const Latestjobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/home`);
        setJobs(response.data.slice(0, 10)); // Fetch and display only the first 10 jobs
      } catch (error) {
        console.error('Error fetching jobs:', error);
        alert('Could not fetch jobs, please try again later.');
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="latest-jobs-container">
      <h1 className="latest-jobs-title">Latest Jobs</h1>
      <div className="jobs-list">
        {jobs.map((job) => (
          <Link to={`/job/${job._id}`} className="job-cards" key={job._id}>
            <div className="job-left-section">
              <img
                src={job.imageUrl || `${window.location.origin}/jh.png`}
                alt={job.title}
                className="job-thumbnail"
              />
            </div>
            <div className="job-right-section">
              <h2 className="job-title">{job.title}</h2>
              <p className="job-company">{job.company}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Latestjobs;
