import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import './Homes.css';
import { Helmet } from 'react-helmet';

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
        console.error('Error fetching Experience jobs:', error);
        alert('Could not fetch Experience jobs, please try again later.');
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchJobs();
  }, [apiUrl]);

  // Creating the JSON-LD Schema data for SEO
  const jobSchema = jobs.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "datePosted": job.postedDate, // Date the job was posted
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company, // Company name from job model
      "sameAs": job.companyUrl || "", // Optional: if you have a URL for the company
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location, // Location from job model
      },
    },
    "baseSalary": job.salary ? {
      "@type": "MonetaryAmount",
      "currency": "INR", // Assuming salary is in INR, you can change it to USD or other currencies
      "value": {
        "@type": "QuantitativeValue",
        "value": job.salary, // Salary from job model
        "unitText": "YEAR" // or MONTH based on the type of salary
      }
    } : undefined, // Only include baseSalary if salary is available
    "employmentType": job.jobType, // Type of job: Full-time, Part-time, etc.
    "url": job.applyNowLink || "", // Link to apply, from job model
    "jobBenefits": job.jobDescription.benefits || [], // Benefits from jobDescription
    "qualifications": job.jobDescription.qualifications || [], // Qualifications from jobDescription
    "responsibilities": job.jobDescription.responsibilities || [], // Responsibilities from jobDescription
  }));

  return (
    <div>
      <Helmet>
        <title>Experience Jobs | JobHustles</title>
        <meta name="description" content="Find the latest job opportunities for Experience. Get job notifications, internships, and placement materials at JobHustles." />
        <meta name="keywords" content="fresher jobs, internships, job opportunities, job hustles, placement materials" />
        <meta property="og:title" content="Experience Jobs | JobHustles" />
        <meta property="og:description" content="Join JobHustles to find Experience jobs and internships across various industries." />
        <meta property="og:image" content="path_to_image_or_logo" />
        <meta property="og:url" content="https://jobhustles.com/experience" />
        
        {/* JSON-LD Schema for Job Postings */}
        <script type="application/ld+json">
          {JSON.stringify(jobSchema)}
        </script>
      </Helmet>

      <h1>Experience Jobs</h1>
      
      {loading ? (
        <div className="loading">Loading jobs...</div> // Styling for loading state remains intact
      ) : (
        <div className="carts">
          {jobs.map((job) => (
            <Card key={job._id} job={job} /> // Each job is mapped correctly to a Card component
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;



//Main Code_______________________________________________________________________________________________

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Card from '../components/Card';
// import './Homes.css';

// const Experience = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(false); // Initialize loading state
//   const apiUrl = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         setLoading(true); // Set loading to true before fetching
//         const response = await axios.get(`${apiUrl}/experience`); // Ensure the API URL is correct
//         setJobs(response.data); // Update jobs with response data
//       } catch (error) {
//         console.error('Error fetching Experience jobs:', error);
//         alert('Could not fetch Experience jobs, please try again later.');
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     fetchJobs();
//   }, [apiUrl]);

//   return (
//     <div>
//         <h1>Experience Jobs</h1>


      
//         <div className="carts">
//                         {jobs.map((job) => (
//                             <Card key={job._id} job={job} />
//                         ))}
//                     </div>
//     </div>
//   );
// };
// export default Experience;
























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
