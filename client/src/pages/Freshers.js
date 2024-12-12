import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import './Homes.css'; // Import the common CSS for job cards
import { Helmet } from 'react-helmet'; // Import Helmet for SEO

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

  // JSON-LD Structured Data for SEO (JobPosting)
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
        "addressLocality": job.location, // Location from job 
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
        "value": 400000, // Salary from job model
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
    <div>
      {/* SEO with Helmet */}
      <Helmet>
        {/* <title>Freshers Jobs | JobHustles</title>
        <meta name="description" content="Find the latest job opportunities for freshers. Get job notifications, internships, and placement materials at JobHustles." />
        <meta name="keywords" content="fresher jobs, internships, job opportunities, job hustles, placement materials" />
        <meta property="og:title" content="Freshers Jobs | JobHustles" />
        <meta property="og:description" content="Join JobHustles to find freshers jobs and internships across various industries." />
        <meta property="og:image" content="path_to_image_or_logo" />
        <meta property="og:url" content="https://jobhustles.com/freshers" /> */}

        <title>Freshers Jobs, Internships & Career Opportunities | JobHustles</title>
              
        <meta name="description" content="Explore freshers jobs, internships, and entry-level career opportunities across various industries. Start your career with top companies through JobHustles!" />
              
        <meta name="keywords" content="fresher jobs, entry-level jobs, internships for freshers, job opportunities for freshers, freshers jobs India, career opportunities for freshers, job hustles, internship openings, graduate jobs India, part-time jobs for freshers, full-time jobs for freshers, internships for freshers 2024, freshers job board, remote jobs for freshers, freshers job alerts, apply for freshers jobs online, freshers job vacancies, job placements for freshers, freshers career opportunities, job search for freshers" />
              
        <meta property="og:title" content="Freshers Jobs, Internships & Career Opportunities | JobHustles" />
        <meta property="og:description" content="Discover the latest job opportunities for freshers, internships, and entry-level positions. Apply today and jumpstart your career with JobHustles." />
        <meta property="og:image" content={`${window.location.origin}/jh.png`} />
        <meta property="og:url" content="https://jobhustles.com/freshers" />
              
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JobHustles" />
              
        {/* Twitter Card meta tags */}
        <meta name="twitter:title" content="Freshers Jobs, Internships & Career Opportunities | JobHustles" />
        <meta name="twitter:description" content="Search for freshers jobs, internships, and career opportunities. Apply now and accelerate your career with JobHustles." />
        <meta name="twitter:image" content={`${window.location.origin}/jh.png`} />
        <meta name="twitter:card" content="summary_large_image" />
  
        
        {/* JSON-LD Schema for Job Postings */}
        <script type="application/ld+json">
          {JSON.stringify(jobSchema)}
        </script>
      </Helmet>

      <h1>Freshers Jobs</h1>

      {loading ? (
        <div className="loading">Loading jobs...</div> // Maintain loading state styling
      ) : (
        <div className="carts">
          {jobs.map((job) => (
            <Card key={job._id} job={job} /> // Ensure job data is correctly passed to the Card component
          ))}
        </div>
      )}
    </div>
  );
};

export default Freshers;



//Main Code ______________________________________________________________________________________________

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import Jobss from '../components/Jobss';
// // import Spinner from '../components/Spinner'; // Make sure to import your Spinner component
// import Card from '../components/Card';
// import './Homes.css'; // Import the common CSS for job cards

// const Freshers = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(false); // Initialize loading state
//   const apiUrl = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         setLoading(true); // Set loading to true before fetching
//         const response = await axios.get(`${apiUrl}/freshers`); // Ensure the API URL is correct
//         setJobs(response.data); // Update jobs with response data
//       } catch (error) {
//         console.error('Error fetching freshers jobs:', error);
//         alert('Could not fetch freshers jobs, please try again later.');
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     fetchJobs();
//   }, [apiUrl]);

//   return (
//     <div>
//         <h1>Freshers Jobs</h1>


      
//         <div className="carts">
//                         {jobs.map((job) => (
//                             <Card key={job._id} job={job} />
//                         ))}
//                     </div>
//     </div>
//   );
// };

// export default Freshers;




















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
