import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Jobss from '../components/Jobss';
// import Spinner from '../components/Spinner'; // Make sure to import your Spinner component
import Card from '../components/Card';
import './Homes.css'; // Import the common CSS for job cards

const Freshers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false); // Initialize loading state
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const response = await axios.get(`${apiUrl}/freshers`); // Ensure the API URL is correct
        setJobs(response.data); // Update jobs with response data
      } catch (error) {
        console.error('Error fetching freshers jobs:', error);
        alert('Could not fetch freshers jobs, please try again later.');
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchJobs();
  }, [apiUrl]);

  return (
    <div>
        <h1>Freshers Jobs</h1>


      
        <div className="carts">
                        {jobs.map((job) => (
                            <Card key={job._id} job={job} />
                        ))}
                    </div>
    </div>
  );
};

export default Freshers;




















/*import React, { useEffect, useState } from 'react';
import { getJobsByCategory } from '../services/jobService';
import Card from '../components/Card';
import '../styles/Experience.css';
const Freshers = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobsByCategory('freshers').then(res => setJobs(res.data));
  }, []);

  return (
    <div className="freshers-container">
      <h2 className="freshers-heading">Freshers Jobs</h2>
      <div className="freshers-job-cards">
        {jobs.slice(0, 8).map(job => (
          <Card key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Freshers;
*/
