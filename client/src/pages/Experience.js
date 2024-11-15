import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import './Homes.css'; // Import the common CSS for job cards
import { Helmet } from 'react-helmet'; // Import React Helmet for SEO

const Experience = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false); // Initialize loading state
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const response = await axios.get(`${apiUrl}/experience`); // Ensure the API URL is correct
        setJobs(response.data); // Update jobs with response data
      } catch (error) {
        console.error('Error fetching experience jobs:', error);
        alert('Could not fetch experience jobs, please try again later.');
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchJobs();
  }, [apiUrl]);

  return (
    <>
      {/* React Helmet for dynamic SEO */}
      <Helmet>
        <title>Experience Jobs - Advance Your Career</title>
        <meta name="description" content="Browse the latest experience-based job opportunities. Take the next step in your career." />
        <meta name="keywords" content="experience jobs, experienced professionals, career growth, job opportunities" />
        <meta property="og:title" content="Experience Jobs - Advance Your Career" />
        <meta property="og:description" content="Browse the latest experience-based job opportunities. Take the next step in your career." />
        <meta property="og:url" content="https://www.jobhustles.com/experience" />
        <meta property="og:image" content="https://www.jobhustles.com/images/logo.png" />
      </Helmet>

      <div>
        <h1>Experience Jobs</h1>

        {/* Display job cards if jobs are available */}
        <div className="carts">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <Card key={job._id} job={job} />
            ))
          ) : (
            <p>No experience jobs available at the moment.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Experience;


//Main Code_______________________________________________________________________________________________
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import './Homes.css';

const Experience = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false); // Initialize loading state
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const response = await axios.get(`${apiUrl}/experience`); // Ensure the API URL is correct
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
export default Experience;
*/
























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Jobss from '../components/Jobss';

// //import '../styles/jobCards.css'; // Import the common CSS for job cards

// const Experience = () => {
//   const [jobs, setJobs] = useState([]);

  
//   useEffect(() => {
//     axios.get('https://jobs-hustle.onrender.com/api/experience')  // Make sure the API URL is correct
//       .then((response) => {
//         setJobs(response.data);  // Update jobs with response data
//       })
//       .catch((error) => {
//         console.error('Error fetching experience jobs:', error);
//         alert('Could not fetch experience jobs, please try again later.');
//       });
//   }, []);


//   return (
//     <div>
//       <h1>Experience Jobs</h1>


      
//       <div className="job-list">

//         {jobs.map(job => (
//        <Jobss key={job._id} job={job}/>
       
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;

/*

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Jobss from '../components/Jobss';
import Spinner from '../components/Spinner'; // Make sure to import your Spinner component

const Experience = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state

  // API URL from environment variable or hardcoded fallback
    // const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const response = await axios.get(`https://jobs-hustle.onrender.com/api/experience`); // Ensure the API URL is correct
        setJobs(response.data); // Update jobs with response data
      } catch (error) {
        console.error('Error fetching experience jobs:', error);
        alert('Could not fetch experience jobs, please try again later.');
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <section className="job-cards">
                <div>
                    <h1 style={{ textAlign: 'center' }}>Experience</h1>
                </div>

                
                {loading ? (
                    <Spinner />  // Show spinner while loading
                ) : (
                    <div className="carts">
                        {jobs.map((job) => (
                            <Card key={job._id} job={job} />
                        ))}
                    </div>
                )}
            </section>
    </div>
  );
};

export default Experience;


*/















/*import React, { useEffect, useState } from 'react';
import { getJobsByCategory } from '../services/jobService';
import Card from '../components/Card';
import '../styles/Experience.css';

const Experience = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobsByCategory('experience').then(res => setJobs(res.data));
  }, []);

  return (
    <div className="experience-container">
      <h2 className="experience-heading">Experience Jobs</h2>
      <div className="experience-job-cards">
        {jobs.slice(0, 8).map(job => (
          <Card key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
*/
