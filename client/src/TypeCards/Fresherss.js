
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';  // Import React Helmet
import '../TypeCardsStyle/OffCampuss.css'; // Your existing CSS file
import { Link } from 'react-router-dom';

const Fresherss = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/freshers`); // Fetch sorted jobs
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
            <Helmet>
                <title>Freshers Jobs | JobHustles</title> {/* Dynamic title */}
                <meta name="description" content="Find the latest freshers job opportunities on JobHustles. Browse jobs for fresh graduates and start your career journey." /> {/* Dynamic description */}
                <meta name="keywords" content="freshers jobs, job opportunities, fresh graduate jobs, job search, career growth" /> {/* Dynamic keywords */}
                <meta property="og:title" content="Freshers Jobs | JobHustles" /> {/* Open Graph title */}
                <meta property="og:description" content="Explore freshers job opportunities in various industries on JobHustles. Start your career with the best job openings." /> {/* Open Graph description */}
                <meta property="og:image" content="https://www.jobhustles.com/images/freshers-jobs-banner.jpg" /> {/* Open Graph image */}
                <meta property="og:url" content="https://www.jobhustles.com/freshers" /> {/* Open Graph URL */}
                <meta property="og:type" content="website" /> {/* Open Graph type */}
                <meta name="twitter:card" content="summary_large_image" /> {/* Twitter card */}
                <meta name="twitter:title" content="Freshers Jobs | JobHustles" /> {/* Twitter title */}
                <meta name="twitter:description" content="Find freshers job opportunities and launch your career with JobHustles." /> {/* Twitter description */}
                <meta name="twitter:image" content="https://www.jobhustles.com/images/freshers-jobs-banner.jpg" /> {/* Twitter image */}
            </Helmet>

            <div className="offcampus-container">
                <Link to='/freshers' className="job-type-heading-link">
                    <h2 className="job-type-heading">Freshers</h2>
                </Link>
                <div className="inner-container">
                    <section className="offcampus-section">
                        <div className="job-type-main">
                            {jobs
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))  // Sort jobs by latest first
                                .slice(0, 6)
                                .map((job) => (
                                    <div className="job-type-card" key={job._id}>
                                        <Link to={`/job/${job._id}`} className='job-type-link'>
                                            {job.imageUrl && <img className="job-type-image" src={job.imageUrl} alt={job.title} />}
                                            <h1 className="job-type-title">{job.title}</h1>
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

export default Fresherss;




//Main code______________________________________________________________________________________________

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../TypeCardsStyle/OffCampuss.css'; // Make sure your CSS file is correct
import { Link } from 'react-router-dom';
// import './OffCampuss.css'
const Fresherss = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/freshers`); // Fetch sorted jobs
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
        <Link to='/freshers' className="job-type-heading-link">
                            <h2 className="job-type-heading">Freshers</h2>
                        </Link>
        <div className="inner-container">
        
            <section className="offcampus-section">
            
                <div className="job-type-main">
                    {jobs
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))  // Sort jobs by latest first
                        .slice(0, 6)
                        .map((job) => (
                            <div className="job-type-card" key={job._id}>
                                <Link to={`/job/${job._id}`} className='job-type-link'>
                                    {job.imageUrl && <img className="job-type-image" src={job.imageUrl} alt={job.title} />}
                                    <h1 className="job-type-title">{job.title}</h1>
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

export default Fresherss;


*/

























/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../TypeCardsStyle/OffCampuss.css'; // Make sure your CSS file is correct
import { Link } from 'react-router-dom';

const Fresherss = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/freshers`); // Fetch sorted jobs
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
        <Link to={`/`} className="job-group-heading-link">
                            <h2 className="job-group-heading">Frehsers</h2>
                        </Link>
        
        <div className="offcampus-container">
            <section className="offcampus-section">
                <div className="job-grid">
                    {jobs
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))  // Sort jobs by latest first
                        .slice(0, 6)
                        .map((job) => (
                            <div className="job-card" key={job._id}>
                                <Link to={`/job/${job._id}`}>
                                    {job.imageUrl && <img className="job-image" src={job.imageUrl} alt={job.title} />}
                                    <h1 className="job-title">{job.title}</h1>
                                </Link>
                            </div>
                        ))}
                </div>
            </section>
        </div>
        </>
    );
};

export default Fresherss;

*/
