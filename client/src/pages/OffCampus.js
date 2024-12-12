import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet'; // Import React Helmet for SEO management
import '../styles/jobCards.css'; // Import the CSS file for job card styling
import Card from '../components/Card';
import Spinner from '../components/Spinner'; // Import your Spinner component
import './Homes.css';

const OffCampus = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/offcampus`); // Fetch off-campus jobs using env variable
        setJobs(response.data); // Update jobs with response data
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Could not fetch jobs, please try again later.'); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchJobs(); // Call the fetch function
  }, []);

  // SEO metadata for the Off-Campus Jobs page
  //const pageTitle = "Off-Campus Jobs";
  //const pageDescription = "Explore a range of off-campus job opportunities available for students. Find your next career opportunity here.";
  //const pageUrl = `${window.location.origin}/off-campus-jobs`; // Dynamic URL for SEO
  //const pageImage = `${window.location.origin}/images/logo.png`; // Default image for SEO

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
          "addressRegion": job.state,
          "postalCode": job.postalCode,
          "streetAddress": job.streetAddress
        },
      },
      "baseSalary": job.salary ? {
        "@type": "MonetaryAmount",
        "currency": "INR", // Assuming salary is in INR, you can change it to USD or other currencies
        "value": {
          "@type": "QuantitativeValue",
          "value": 450000, // Salary from job model
          "unitText": "YEAR" // or MONTH based on the type of salary
        }
      } : undefined, // Only include baseSalary if salary is available
      "employmentType": job.jobType, // Type of job: Full-time, Part-time, etc.
      "url": job.applyNowLink || "", // Link to apply, from job model
      "jobBenefits": job.jobDescription.benefits || [], // Benefits from jobDescription
      "qualifications": job.jobDescription.qualifications || [], // Qualifications from jobDescription
      "responsibilities": job.jobDescription.responsibilities || [], // Responsibilities from jobDescription
      "validThrough": job.validThrough,
    }));


  return (
    <>
      {/* React Helmet for SEO optimization */}
      <Helmet>
        {/* <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="off-campus jobs, student jobs, career opportunities, job listings, remote jobs" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} /> */}
        <title>Off-Campus Jobs for Students | Explore Career Opportunities at JobHustles</title>
              
        <meta name="description" content="Explore a wide range of off-campus job opportunities for students and freshers. Find your perfect job, apply easily, and kickstart your career today at JobHustles." />
              
        <meta name="keywords" content="off-campus jobs, student jobs, remote jobs for students, part-time jobs for students, off-campus jobs for freshers, work from home jobs for students, off-campus job opportunities, jobs for freshers 2024, remote career opportunities, off-campus job listings, part-time job opportunities for students, freshers job openings, remote jobs for college students, flexible work for students, apply for off-campus jobs, off-campus part-time jobs, job hustles off-campus jobs, job opportunities for freshers, off-campus internships, work from home student jobs" />
              
        <meta property="og:title" content="Off-Campus Jobs for Students | Explore Career Opportunities at JobHustles" />
        <meta property="og:description" content="Browse remote off-campus job opportunities for students and freshers. Get career-ready by applying to the latest jobs in various industries at JobHustles." />
        <meta property="og:url" content="https://jobhustles.com/off-campus-jobs" />
        <meta property="og:image" content={`${window.location.origin}/jh.png`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JobHustles" />
              
        {/* Twitter Card meta tags */}
        <meta name="twitter:title" content="Off-Campus Jobs for Students | Explore Career Opportunities at JobHustles" />
        <meta name="twitter:description" content="Looking for off-campus jobs? Find part-time, remote, and flexible job opportunities for students and freshers at JobHustles. Apply today and advance your career!" />
        <meta name="twitter:image" content={`${window.location.origin}/jh.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* JSON-LD Schema for Job Postings */}
        <script type="application/ld+json">
          {JSON.stringify(jobSchema)}
        </script>
        
      </Helmet>

      <div>
        <h1>Off-Campus Jobs</h1>
        {error && <p className="error">{error}</p>}
        <div className="carts">
          {loading ? (
            <Spinner /> // Show loading spinner while fetching
          ) : jobs.length > 0 ? (
            jobs.map((job) => (
              <Card key={job._id} job={job} /> // Render job details using Card component
            ))
          ) : (
            <p>No off-campus jobs available at the moment.</p> // Message if no jobs are found
          )}
        </div>
      </div>
    </>
  );
};

export default OffCampus;








//MAin code _______________________________________________________________________________________________________

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/jobCards.css'; // Import the CSS file for job card styling
// import Card from '../components/Card';
// import Spinner from '../components/Spinner'; // Import your Spinner component
// import './Homes.css';

// const OffCampus = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true); // Initialize loading state
//   const [error, setError] = useState(null); // State to handle errors

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         setLoading(true); // Set loading to true before fetching
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/offcampus`); // Fetch off-campus jobs using env variable
//         setJobs(response.data); // Update jobs with response data
//       } catch (error) {
//         console.error('Error fetching jobs:', error);
//         setError('Could not fetch jobs, please try again later.'); // Set error message
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     fetchJobs(); // Call the fetch function
//   }, []);

//   // Display a loading spinner if data is still loading
//   if (loading) {
//     return <Spinner />;
//   }

//   return (
//     <div>
//       <h1>Off-Campus Jobs</h1>
//       {error && <p className="error">{error}</p>} 
//       <div className="carts">
//         {jobs.length > 0 ? (
//           jobs.map((job) => (
//             <Card key={job._id} job={job} /> // Render job details using Card component
//           ))
//         ) : (
//           <p>No off-campus jobs available at the moment.</p> // Message if no jobs are found
//         )}
//       </div>
//     </div>
//   );
// };

// export default OffCampus;













/*import React, { useEffect, useState } from 'react';
import { getJobsByCategory } from '../services/jobService';
import Card from '../components/Card';
import '../styles/OffCampus.css';

const OffCampus = () => {
  const [jobs, setJobs] = useState([]);


  useEffect(() => {
    getJobsByCategory('off-campus').then(res => setJobs(res.data));
  }, []);

  return (
    <div className="off-campus-container">
      <h2 className="off-campus-heading">Off Campus Jobs</h2>
      <div className="off-campus-job-cards">
        {jobs.slice(0, 8).map(job => (
          <Card key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default OffCampus;
*/



/*


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';  // Assuming you have a Card component to display jobs

const OffCampus = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/offcampus')  // Make sure the API URL is correct
      .then((response) => {
        setJobs(response.data);  // Update jobs with response data
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
        alert('Could not fetch jobs, please try again later.');
      });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Off Campus Jobs</h1>
      <div className="job-grid">
        {jobs.slice(0, 8).map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default OffCampus;
*/
