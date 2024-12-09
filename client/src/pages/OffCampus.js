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
  const pageTitle = "Off-Campus Jobs";
  const pageDescription = "Explore a range of off-campus job opportunities available for students. Find your next career opportunity here.";
  const pageUrl = `${window.location.origin}/off-campus-jobs`; // Dynamic URL for SEO
  const pageImage = `${window.location.origin}/images/logo.png`; // Default image for SEO

  // Structured Data for Job Posting (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": pageUrl,
    "image": pageImage,
    "mainEntity": {
      "@type": "JobPosting",
      "title": "Off-Campus Jobs",
      "description": pageDescription,
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Various Hiring Companies"
      },
      "employmentType": "Part-time",
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Remote"
        }
      }
    }
  };

  return (
    <>
      {/* React Helmet for SEO optimization */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="off-campus jobs, student jobs, career opportunities, job listings, remote jobs" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />

        {/* JSON-LD structured data for Off-Campus Jobs */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
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
