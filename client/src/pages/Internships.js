import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner'; // Correct import path for Spinner
import Card from '../components/Card';
import './Homes.css';  // Assuming Card is a component for rendering job cards
import { Helmet } from 'react-helmet'; // Import Helmet for SEO

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

  // JSON-LD Structured Data for SEO (InternshipPosting)
  const internshipSchema = jobs.map((job) => ({
    "@context": "https://schema.org",
    "@type": "InternshipPosting",
    "title": job.title,
    "description": job.description,
    "datePosted": job.postedDate, // Date the internship was posted
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
    "employmentType": job.jobType, // Type of internship: Full-time, Part-time, etc.
    "url": job.applyNowLink || "", // Link to apply, from job model
    "qualifications": job.jobDescription.qualifications || [], // Qualifications from jobDescription
    "responsibilities": job.jobDescription.responsibilities || [], // Responsibilities from jobDescription
  }));

  // Display a loading spinner if data is still loading
  if (loading) {
    return <Spinner />; // Maintain loading spinner
  }

  return (
    <div>
      {/* SEO with Helmet */}
      <Helmet>
        {/* <title>Internships | JobHustles</title>
        <meta name="description" content="Find the latest internships across various industries. Apply for internships and gain real-world experience at JobHustles." />
        <meta name="keywords" content="internships, internship opportunities, freshers internships, job hustles" />
        <meta property="og:title" content="Internships | JobHustles" />
        <meta property="og:description" content="Browse the latest internships for freshers and students at JobHustles. Gain practical experience with top companies." />
        <meta property="og:image" content="path_to_image_or_logo" />
        <meta property="og:url" content="https://jobhustles.com/internships" /> */}


        <title>Latest Internships & Career Opportunities for Freshers | JobHustles</title>

        <meta name="description" content="Browse the latest internships for freshers and college students. Gain valuable experience with top companies in various industries. Apply now on JobHustles!" />

        <meta name="keywords" content="internships for freshers, internships for students, entry-level internships, paid internships, summer internships, internships India, internships for freshers 2024, remote internships for freshers, internships with stipend, best internships for freshers, college internships, internships in technology, internship opportunities for freshers, internships in marketing, internships for engineering students, internships for non-technical freshers, internship application for students, apply for internships online, job hustles internships, job opportunities internships India" />

        <meta property="og:title" content="Latest Internships & Career Opportunities for Freshers | JobHustles" />
        <meta property="og:description" content="Find internships for freshers, students, and recent graduates. Gain real-world experience in various industries and top companies. Apply now on JobHustles." />
        <meta property="og:image" content={`${window.location.origin}/jh.png`} />
        <meta property="og:url" content="https://jobhustles.com/internships" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JobHustles" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:title" content="Latest Internships & Career Opportunities for Freshers | JobHustles" />
        <meta name="twitter:description" content="Search for internships for freshers and students across industries. Apply today and gain valuable experience with JobHustles." />
        <meta name="twitter:image" content={`${window.location.origin}/jh.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* JSON-LD Schema for Internship Postings */}
        <script type="application/ld+json">
          {JSON.stringify(internshipSchema)}
        </script>
      </Helmet>

      <h1>Internships</h1>
      <div className="job-list">
        {jobs.length > 0 ? (
          jobs.map((job) => (
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




//Main Code _________________________________________________________________________________________________________


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Spinner from '../components/Spinner'; // Correct import path for Spinner
// import Card from '../components/Card';
// import './Homes.css';  // Assuming Card is a component for rendering job cards

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
//     <div>
//       <h1>Internships</h1>
//       <div className="job-list">
//         {jobs.length > 0 ? (
//           jobs.map(job => (
//             <Card key={job._id} job={job} />  // Assuming Card is a component that renders job details
//           ))
//         ) : (
//           <p>No internships available at the moment.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Internships;



















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








