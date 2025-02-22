
//Main Code________________________________________________________________________________________

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../TypeCardsStyle/RelatedJobs.css'; // Make sure your CSS file is correct
import { Link } from 'react-router-dom';
// import './OffCampuss.css'
const Experiencess = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/home`); // Fetch sorted jobs
                setJobs(response.data); // Set the jobs in state
            } catch (error) {
                console.error('Error fetching jobs:', error);
                alert('Could not fetch jobs, please try again later.');
            }
        };

        fetchJobs();
    }, []);

    return (
        <>
        
        <div className="offcampus-container">
        <h2 className='gap'>Latest Trending Jobs</h2>
        
        <AdBanner adClient="ca-pub-7505662209991654" adSlot="6296919840" />
        <div className="inner-container">
        
            <section className="offcampus-section">
            
                <div className="job-type-main">
                    {jobs
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))  // Sort jobs by latest first
                        .slice(0, 12)
                        .map((job) => (
                            <div className="job-type-cards" key={job._id}>
                                <Link to={`/job/${job._id}`} className='job-type-link'>
                                    {job.imageUrl && <img className="job-type-image" src={job.imageUrl} alt={job.title} />}
                                    <h4 className="job-type-title jobtypecol">{job.title}</h4>
                                </Link>
                            </div>
                        ))}
                </div>
            </section>
            </div>
            </div> 
        
        </>
    );
};

export default Experiencess;