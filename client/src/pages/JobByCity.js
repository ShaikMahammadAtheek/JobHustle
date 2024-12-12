


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner'; // Import your Spinner component
import Card from '../components/Card';
import './Homes.css'; // Import the common CSS for job cards
import { Helmet } from 'react-helmet'; // Import Helmet for SEO optimization

const JobByCity = () => {
  const { city } = useParams(); // Get city from URL
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false); // Initialize loading state

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const apiUrl = process.env.REACT_APP_API_URL; // Get API URL from environment variable
        const response = await axios.get(`${apiUrl}/job-by-city/${city}`); // Fetch jobs by city
        setJobs(response.data); // Set jobs with response data
      } catch (error) {
        console.error('Error fetching jobs:', error);
        alert('Could not fetch jobs, please try again later.'); // Optional alert for error handling
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    console.log(`Fetching jobs for city: ${city}`); // Log the city to the console
    fetchJobs(); // Call the fetch function
  }, [city]);

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

  // Display a loading spinner if data is still loading
  if (loading) {
    return <Spinner />; // Maintain loading spinner
  }

  return (
    <div>
      {/* SEO with Helmet */}
      <Helmet>
        {/* <title>Jobs in {city} | JobHustles</title>
        <meta name="description" content={`Find the latest job opportunities in ${city}. Apply for jobs in various industries at JobHustles.`} />
        <meta name="keywords" content={`jobs in ${city}, job opportunities, ${city} jobs, job hustles`} />
        <meta property="og:title" content={`Jobs in ${city} | JobHustles`} />
        <meta property="og:description" content={`Browse job listings in ${city} and apply for top job opportunities at JobHustles.`} />
        <meta property="og:image" content="path_to_image_or_logo" />
        <meta property="og:url" content={`https://jobhustles.com/job-by-city/${city}`} />
         */}

<title>Find Jobs in {city} | Top Career Opportunities at JobHustles</title>
        <meta 
          name="description" 
          content={`Discover the latest job opportunities in ${city} and apply for exciting roles across various industries. Find full-time, part-time, remote, and flexible job openings at JobHustles.`} 
        />
        <meta 
          name="keywords" 
          content={`${city} jobs, jobs in ${city}, job opportunities in ${city}, part-time jobs ${city}, full-time jobs ${city}, job listings ${city}, careers in ${city}, work in ${city}, apply for jobs ${city}, JobHustles jobs`} 
        />
        <meta property="og:title" content={`Find Jobs in ${city} | Top Career Opportunities at JobHustles`} />
        <meta 
          property="og:description" 
          content={`Browse top job opportunities in ${city}, apply for the latest jobs in various fields, and jumpstart your career today at JobHustles.`} 
        />
        <meta property="og:image" content={`${window.location.origin}/jh.png`} />
        <meta property="og:url" content={`https://jobhustles.com/job-by-city/${city}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JobHustles" />
        <meta name="twitter:title" content={`Find Jobs in ${city} | Top Career Opportunities at JobHustles`} />
        <meta 
          name="twitter:description" 
          content={`Looking for jobs in ${city}? Explore job listings, career opportunities, and apply for positions that fit your skills and experience. Find your dream job today at JobHustles.`} 
        />
        <meta name="twitter:image" content={`${window.location.origin}/jh.png`} />
        <meta name="twitter:card" content="summary_large_image" />

         
        {/* JSON-LD Schema for Job Postings */}
        <script type="application/ld+json">
          {JSON.stringify(jobSchema)}
        </script>
      </Helmet>

      <h1>Jobs in {city}</h1>
      <div className="carts">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <Card key={job._id} job={job} />  // Assuming Card is a component that renders job details
          ))
        ) : (
          <p>No jobs available in {city} at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default JobByCity;





//Main code________________________________________________________________________________________


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// // import Jobss from '../components/Jobss';
// import Card from '../components/Card';
// import './Homes.css';
// import Spinner from '../components/Spinner'; // Import your Spinner component

// const JobByCity = () => {
//   const { city } = useParams(); // Get city from URL
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(false); // Initialize loading state

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         setLoading(true); // Set loading to true before fetching
//         const apiUrl = process.env.REACT_APP_API_URL; // Get API URL from environment variable
//         const response = await axios.get(`${apiUrl}/job-by-city/${city}`); // Fetch jobs by city
//         setJobs(response.data); // Set jobs with response data
//       } catch (error) {
//         console.error('Error fetching jobs:', error);
//         alert('Could not fetch jobs, please try again later.'); // Optional alert for error handling
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     console.log(`Fetching jobs for city: ${city}`); // Log the city to the console
//     fetchJobs(); // Call the fetch function
//   }, [city]);

//   return (
//     <div>
//       <h1>Jobs in {city}</h1>
//       {loading ? ( // Conditional rendering based on loading state
//         <Spinner /> // Show spinner while loading
//       ) : (
//         <div className="carts">
//                         {jobs.map((job) => (
//                             <Card key={job._id} job={job} />
//                         ))}
//                     </div>
//       )}
//     </div>
//   );
// };

// export default JobByCity;













/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/jobCards.css'; // Import the common CSS for job cards

const JobByCity = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => { 
  
    axios.get('http://localhost:5000/api/jobbycity')  // Make sure the API URL is correct
      .then((response) => {
        setJobs(response.data);  // Update jobs with response data
      })
      .catch((error) => {
        console.error('Error fetching jobs by city:', error);
        alert('Could not fetch jobs by city, please try again later.');
      });
  }, []);

  return (
    <div>
      <h1>Jobs By City</h1>
      <div className="job-list">
        {jobs.map(job => (
          <div key={job._id} className="job-card">
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.description}</p>
            {job.imageUrl && <img src={job.imageUrl} alt={job.title} className="job-card-image" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobByCity;

*/




















/*import React, { useEffect, useState } from 'react';
import { getJobsByCategory } from '../services/jobService';
import Card from '../components/Card';
import '../styles/JobByCity.css';

const JobByCity = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobsByCategory('job-by-city').then(res => setJobs(res.data));
  }, []);

  return (
    <div className="job-by-city-container">
      <h2 className="job-by-city-heading">Job By City</h2>
      <div className="job-by-city-job-cards">
        {jobs.slice(0, 8).map(job => (
          <Card key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobByCity;
*/
