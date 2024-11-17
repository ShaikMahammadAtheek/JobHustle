// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Spinner from '../components/Spinner'; // Correct import path for Spinner
// import Card from '../components/Card';
// import './Homes.css';  // Assuming Card is a component for rendering job cards
// import { Helmet } from 'react-helmet'; // Import React Helmet

// const Internships = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true); // Initialize loading state

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         setLoading(true); // Set loading to true before fetching
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/internships`); // Fetch internships
//         setJobs(response.data); // Update jobs with response data
//       } catch (error) {
//         console.error('Error fetching internships:', error);
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     fetchJobs();
//   }, []); // Empty dependency array so it only runs once on mount

//   // Display a loading spinner if data is still loading
//   if (loading) {
//     return <Spinner />;
//   }

//   return (
//     <>
      
//       <Helmet>
//         <title>Internships - Career Opportunities</title>
//         <meta name="description" content="Explore the latest internships available to kick-start your career. Apply today!" />
//         <meta name="keywords" content="internships, job opportunities, career internships, student internships, job search" />
//         <meta property="og:title" content="Internships - Career Opportunities" />
//         <meta property="og:description" content="Explore the latest internships available to kick-start your career. Apply today!" />
//         <meta property="og:url" content="https://www.jobhustles.com/internships" />
//         <meta property="og:image" content="https://www.jobhustles.com/images/logo.png" />
//       </Helmet>

//       <div>
//         <h1>Internships</h1>
//         <div className="job-list">
//           {jobs.length > 0 ? (
//             jobs.map(job => (
//               <Card key={job._id} job={job} />  // Assuming Card is a component that renders job details
//             ))
//           ) : (
//             <p>No internships available at the moment.</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Internships;



//Main Code _________________________________________________________________________________________________________


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner'; // Correct import path for Spinner
import Card from '../components/Card';
import './Homes.css';  // Assuming Card is a component for rendering job cards

const Internships = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/internships`); // Fetch internships
        setJobs(response.data); // Update jobs with response data
      } catch (error) {
        console.error('Error fetching internships:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchJobs();
  }, []); // Empty dependency array so it only runs once on mount

  // Display a loading spinner if data is still loading
  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>Internships</h1>
      <div className="job-list">
        {jobs.length > 0 ? (
          jobs.map(job => (
            <Card key={job._id} job={job} />  // Assuming Card is a component that renders job details
          ))
        ) : (
          <p>No internships available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Internships;



















/*import React, { useEffect, useState } from 'react';
import { getJobsByCategory } from '../services/jobService';
import Card from '../components/Card';
import '../styles/Internships.css'

const Internships = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobsByCategory('internships').then(res => setJobs(res.data));
  }, []);

  return (
    <div className="internships-container">
      <h2 className="internships-heading">Internships</h2>
      <div className="internships-job-cards">
        {jobs.slice(0, 8).map(job => (
          <Card key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Internships;
*/








