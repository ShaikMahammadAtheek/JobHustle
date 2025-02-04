// src/pages/JobDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/JobDetails.css';
import { Helmet } from 'react-helmet';
import AdBanner from '../components/AdBanner';
import RelatedJobs from '../TypeCards/RelatedJobs';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/home/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) {
    return <div className="loading-spinner"><div></div></div>;
  }

  if (!job) {
    return <div>Error loading job details</div>;
  }

  const jobDescription = job.jobDescription || {};
  const jobImage = job.imageUrl || `${window.location.origin}/jh.png`;
  const jobUrl = `${window.location.origin}/job/${job._id}`;

  return (
    <>
      <Helmet>
        <title>{job.title} - Job Details at JobHustles | Apply Now</title>
        <meta name="description" content={`Explore detailed job information for the position of ${job.title} at ${job.company}. Learn about qualifications, experience requirements, salary, and apply now for a career with ${job.company}.`} />
        <meta name="keywords" content={`${job.title}, ${job.company}, job details, career opportunities, job description, apply for ${job.title}`} />
        <meta property="og:title" content={`${job.title} - Job Details at JobHustles`} />
        <meta property="og:description" content={`Find detailed information about the ${job.title} position at ${job.company}, including job requirements, salary, experience, and how to apply. Start your career journey at JobHustles today.`} />
        <meta property="og:image" content={jobImage} />
        <meta property="og:url" content={jobUrl} />
        <meta name="twitter:title" content={`${job.title} - Job Details at JobHustles`} />
        <meta name="twitter:description" content={`Looking for a job in ${job.title}? Check out the job details, responsibilities, qualifications, salary and apply for ${job.title} at ${job.company} on JobHustles.`} />
        <meta name="twitter:image" content={jobImage} />
      </Helmet>

      <div className="bgcol">
        <div className="job-details-container">
          {/* Before Title Ad */}
          <AdBanner adClient="ca-pub-7505662209991654" adSlot="8738949032" />
          
          <h1 className="job-title">{job.title}</h1>
          <h2><i style={{ color: "red" }}>Company: </i>{job.company}</h2>

          {/* Before Description Ad */}
          <AdBanner adClient="ca-pub-7505662209991654" adSlot="9673058076" />

          <div className="job-summary">
            <div className="job-info">
              <span className="icon experience-icon">📅</span><span>{job.experience}</span>
            </div>
            <div className="job-info">
              <span className="icon salary-icon">💼</span><span>{job.salary}</span>
            </div>
            <div className="job-info">
              <span className="icon qualification-icon">🎓</span><span>{job.qualification}</span>
            </div>
            <div className="job-info">
              <span className="icon location-icon">📍</span><span>{job.location}</span>
            </div>
          </div>

          <div className="job-details">
            <h3>Posted: {new Date(job.postedDate).toLocaleDateString('en-GB')}</h3>
            <h4>Job Description</h4>
            <p>{job.description || 'No description available.'}</p>

            {/* Sidebar Left Ad (Desktop Only) */}
            <div className="sidebar-left-ad">
              <AdBanner adClient="ca-pub-7505662209991654" adSlot="9114654878" />
              <AdBanner adClient="ca-pub-7505662209991654" adSlot="6457298416" />
            </div>

            <h4>Job Information:</h4>
            <table className="job-details-table">
              <tbody>
                <tr><td>Job Role</td><td>{job.jobRole || 'N/A'}</td></tr>
                <tr><td>Location</td><td>{job.location || 'N/A'}</td></tr>
                <tr><td>Job Type</td><td>{job.jobType || 'N/A'}</td></tr>
                <tr><td>Qualification</td><td>{job.qualification || 'N/A'}</td></tr>
                <tr><td>Main Stream</td><td>{jobDescription.mainStream || 'N/A'}</td></tr>
                <tr><td>Experience</td><td>{job.experience || 'N/A'}</td></tr>
                <tr><td>Last Date</td><td>{jobDescription.lastdate || 'N/A'}</td></tr>
              </tbody>
            </table>

            {/* Before Apply Link Ad */}
            <AdBanner adClient="ca-pub-7505662209991654" adSlot="2711562893" />

            <h4>Additional Information:</h4>
            <div className="headings-section">
              {jobDescription.headings?.length > 0 ? (
                jobDescription.headings.map((headingItem, index) => (
                  <div key={index} className="heading-item">
                    <h5 className="heading-title">{headingItem.heading}</h5>
                    <ul className="content-list">
                      {headingItem.content.map((contentItem, i) => (
                        <li key={i}>{contentItem}</li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <p>No additional information available.</p>
              )}
            </div>

            <div className="apply-button-container">
              <button className="apply-now-button apply-button" onClick={() => window.open(job.applyNowLink, '_blank')}>
                Apply Now
              </button>
            </div>

            {/* After Apply Link Ad */}
            <AdBanner adClient="ca-pub-7505662209991654" adSlot="1427736545" />
          </div>
        </div>
      </div>

      {/* Sidebar Right Ad (Desktop Only) */}
      <div className="sidebar-right-ad">
        <AdBanner adClient="ca-pub-7505662209991654" adSlot="4988304071" />
        <AdBanner adClient="ca-pub-7505662209991654" adSlot="3096041432" />
      </div>

      {/* Before Trending Jobs */}
      <AdBanner adClient="ca-pub-7505662209991654" adSlot="6296919840" />

      <RelatedJobs />

      {/* Social Media Buttons */}
      {/* Add Social Media links here */}
    </>
  );
};

export default JobDetails;






















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import '../styles/JobDetails.css';
// import { Helmet } from 'react-helmet'; // Import React Helmet for dynamic meta tags"
// // import Latestjobs from '../TypeCards/Latestjobs';
// import RelatedJobs from '../TypeCards/RelatedJobs'

// const JobDetails = () => {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobDetails = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/home/${id}`);
//         setJob(response.data);
//       } catch (error) {
//         console.error('Error fetching job details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobDetails();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="loading-spinner">
//         <div></div>
//       </div>
//     );
//   }

//   if (!job) {
//     return <div>Error loading job details</div>;
//   }

//   const jobDescription = job.jobDescription || {};
//   //const jobTitle = job.title || "Job Details";
//   //const jobDescriptionMeta = `${job.title} at ${job.company}: ${job.description}` || "Find detailed job information.";
//   const jobImage = job.imageUrl || `${window.location.origin}/jh.png`;
//   const jobUrl = `${window.location.origin}/job/${job._id}`;

//   // Structured Data for JobPosting (JSON-LD)
//   const jobSchema = {
//     "@context": "https://schema.org",
//     "@type": "JobPosting",
//     "title": job.title,
//     "description": job.description,
//     "datePosted": job.postedDate,
//     "hiringOrganization": {
//       "@type": "Organization",
//       "name": job.company,
//       "sameAs": job.companyUrl || ""
//     },
//     "jobLocation": {
//       "@type": "Place",
//       "address": {
//         "@type": "PostalAddress",
//         "addressLocality": job.location,
//         "addressRegion": job.state, // Added state for addressRegion
//         "postalCode": job.postalCode, // Added postalCode
//         "streetAddress": job.streetAddress // Added streetAddress
//       }
//     },
//     "employmentType": job.jobType,
//     "url": job.applyNowLink || "",
//     "qualifications": job.jobDescription.qualifications || '',
//     "responsibilities": job.jobDescription.responsibilities || '',
//     "experienceRequirements": job.experience || '',
//     "salaryCurrency": "INR", // Assuming salary is in INR; you can change this as needed
//     "baseSalary": {
//       "@type": "MonetaryAmount",
//       "value": {
//         "@type": "QuantitativeValue",
//         "value": 450000, // Example salary, change according to your data (for 6 LPA)
//         "unitText": "YEAR"
//       }
//     },
//     "validThrough": job.validThrough // Assuming the job has an expiration date (validThrough)
//   };
  

//   return (
//     <>
//       {/* React Helmet for SEO optimization */}
//       <Helmet>
//         {/* <title>{jobTitle} - Job Details</title>
//         <meta name="description" content={jobDescriptionMeta} />
//         <meta name="keywords" content={`${job.title}, ${job.company}, job details, job description, career opportunities`} />
//         <meta property="og:title" content={`${jobTitle} - Job Details`} />
//         <meta property="og:description" content={jobDescriptionMeta} />
//         <meta property="og:url" content={jobUrl} />
//         <meta property="og:image" content={jobImage} />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={`${jobTitle} - Job Details`} />
//         <meta name="twitter:description" content={jobDescriptionMeta} />
//         <meta name="twitter:image" content={jobImage} /> */}


// <title>{job.title} - Job Details at JobHustles | Apply Now</title>
//         <meta 
//           name="description" 
//           content={`Explore detailed job information for the position of ${job.title} at ${job.company}. Learn about qualifications, experience requirements, salary, and apply now for a career with ${job.company}.`} 
//         />
//         <meta 
//           name="keywords" 
//           content={`${job.title}, ${job.company}, job details, career opportunities, job description, apply for ${job.title}, ${job.title} job, job listing, career job openings, job opportunities ${job.company}, job salary ${job.title}, job responsibilities, apply now for ${job.title}`} 
//         />
//         <meta property="og:title" content={`${job.title} - Job Details at JobHustles`} />
//         <meta 
//           property="og:description" 
//           content={`Find detailed information about the ${job.title} position at ${job.company}, including job requirements, salary, experience, and how to apply. Start your career journey at JobHustles today.`} 
//         />
//         <meta property="og:image" content={jobImage} />
//         <meta property="og:url" content={jobUrl} />
//         <meta property="og:type" content="website" />
//         <meta property="og:site_name" content="JobHustles" />
//         <meta name="twitter:title" content={`${job.title} - Job Details at JobHustles`} />
//         <meta 
//           name="twitter:description" 
//           content={`Looking for a job in ${job.title}? Check out the job details, responsibilities, qualifications, salary and apply for ${job.title} at ${job.company} on JobHustles.`} 
//         />
//         <meta name="twitter:image" content={jobImage} />
//         <meta name="twitter:card" content="summary_large_image" />

//         {/* JSON-LD structured data for Job Posting */}
//         <script type="application/ld+json">
//           {JSON.stringify(jobSchema)}
//         </script>
//       </Helmet>

//       <div className="bgcol">
//         <div className="job-details-container">
//           <h1 className="job-title">{job.title}</h1>
//           <h2>
//             <i style={{ color: "red" }}>Company: </i>
//             {job.company}
//           </h2>

//           <div className="job-summary">
//             <div className="job-info">
//               <span className="icon experience-icon">📅</span>
//               <span>{job.experience}</span>
//             </div>
//             <div className="job-info">
//               <span className="icon salary-icon">💼</span>
//               <span>{job.salary}</span>
//             </div>
//             <div className="job-info">
//               <span className="icon qualification-icon">🎓</span>
//               <span>{job.qualification}</span>
//             </div>
//             <div className="job-info">
//               <span className="icon location-icon">📍</span>
//               <span>{job.location}</span>
//             </div>
//           </div>

//           <div className="job-details">
//             <h3>Posted: {new Date(job.postedDate).toLocaleDateString('en-GB')}</h3>
//             <h4>Job Description</h4>
//             <p>{job.description || 'No description available.'}</p>

//             <h4>Job Information:</h4>
//             <table className="job-details-table">
//               <tbody>
//                 <tr>
//                   <td>Job Role</td>
//                   <td>{job.jobRole || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td>Location</td>
//                   <td>{job.location || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td>Job Type</td>
//                   <td>{job.jobType || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td>Qualification</td>
//                   <td>{job.qualification || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td>Main Stream</td>
//                   <td>{jobDescription.mainStream || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td>Experience</td>
//                   <td>{job.experience || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td>Last Date</td>
//                   <td>{jobDescription.lastdate || 'N/A'}</td>
//                 </tr>
//               </tbody>
//             </table>

//             <h4>Additional Information:</h4>
//             <div className="headings-section">
//               {jobDescription.headings?.length > 0 ? (
//                 jobDescription.headings.map((headingItem, index) => (
//                   <div key={index} className="heading-item">
//                     <h5 className="heading-title">{headingItem.heading}</h5>
//                     <ul className="content-list">
//                       {headingItem.content.map((contentItem, i) => (
//                         <li key={i}>{contentItem}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))
//               ) : (
//                 <p>No additional information available.</p>
//               )}
//             </div>

//             <div className="apply-button-container">
//               <button
//                 className="apply-now-button apply-button"
//                 onClick={() => window.open(job.applyNowLink, '_blank')}
//               >
//                 Apply Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <RelatedJobs/>
            
//              {/* Social Media Buttons */}
//           <div className="social-button-container">
//             <h4 className='whatsappcolor'>Join Our WhatsApp Group :-</h4>
//             <a
//               href="https://www.whatsapp.com/channel/0029VajnMvaKWEKzCKLMt40P"
//               className="social-button whatsapp-button"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <i className="fab fa-whatsapp"></i> WhatsApp
//             </a>

//             <h4 className='telegramcolor'>Join Our Telegram Group :-</h4>
//             <a
//               href="https://t.me/Jobs_hustle"
//               className="social-button telegram-button"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <i className="fab fa-telegram"></i> Telegram
//             </a>

//             <h4 className='instacolor'>Follow Our Instgram page :-</h4>

//             <a
//               href="https://www.instagram.com/jobhustles__jobupdates?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw="
//               className="social-button instagram-button"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <i className="fab fa-instagram"></i> Instagram
//             </a>

//             <h4 className='youtubecolor'>Subscriber Our Youtube Channel :-</h4>
//             <a
//               href="https://youtube.com/@jobhustles?si=SuIG9pY7WkVWiiza"
//               className="social-button youtube-button"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <i className="fab fa-youtube"></i> YouTube
//             </a>
//           </div>
//     </>
//   );
// };

// export default JobDetails;




//Main 2 code_______________________________________________________________________________________________

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import '../styles/JobDetails.css';
// import { Helmet } from 'react-helmet'; // Import React Helmet

// const JobDetails = () => {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobDetails = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/home/${id}`); // Fetch job details
//         setJob(response.data);
//       } catch (error) {
//         console.error('Error fetching job details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobDetails();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="loading-spinner">
//         <div></div>
//       </div>
//     );
//   }

//   if (!job) {
//     return <div>Error loading job details</div>;
//   }

//   const jobDescription = job.jobDescription || {};
//   const jobTitle = job.title || "Job Details";
//   const jobDescriptionMeta = `${job.title} at ${job.company}: ${job.description}` || "Find detailed job information.";
//   const jobImage = job.imageUrl || `${window.location.origin}/images/logo.png`;
//   const jobUrl = `${window.location.origin}/job/${job._id}`;

//   return (
//     <>
//       {/* React Helmet for dynamic SEO */}
//       <Helmet>
//         <title>{jobTitle} - Job Details</title>
//         <meta name="description" content={jobDescriptionMeta} />
//         <meta name="keywords" content={`${job.title}, ${job.company}, job details, job description, career opportunities`} />
//         <meta property="og:title" content={`${jobTitle} - Job Details`} />
//         <meta property="og:description" content={jobDescriptionMeta} />
//         <meta property="og:url" content={jobUrl} />
//         <meta property="og:image" content={jobImage} />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={`${jobTitle} - Job Details`} />
//         <meta name="twitter:description" content={jobDescriptionMeta} />
//         <meta name="twitter:image" content={jobImage} />
//       </Helmet>

//       <div className="bgcol">
//         <div className="job-details-container">
//           <h1 className="job-title">{job.title}</h1>
//           <h2>
//             <i style={{ color: "red" }}>Company: </i>
//             {job.company}
//           </h2>

//           <div className="job-summary">
//             <div className="job-info">
//               <span className="icon experience-icon">📅</span>
//               <span>{job.experience}</span>
//             </div>
//             <div className="job-info">
//               <span className="icon salary-icon">💼</span>
//               <span>{job.salary}</span>
//             </div>
//             <div className="job-info">
//               <span className="icon qualification-icon">🎓</span>
//               <span>{job.qualification}</span>
//             </div>
//             <div className="job-info">
//               <span className="icon location-icon">📍</span>
//               <span>{job.location}</span>
//             </div>
//           </div>

//           <div className="job-details">
//             {/* <h3>Posted: {new Date(job.postedDate).toLocaleDateString()}</h3> */}
//             <h3>Posted: {new Date(job.postedDate).toLocaleDateString('en-GB')}</h3>
//             <h4>Job Description</h4>
//             <p>{job.description || 'No description available.'}</p>

//             <h4>Job Information:</h4>
//             <table className="job-details-table">
//               <tbody>
//                 <tr>
//                   <td>JobRole</td>
//                   <td>{job.jobRole || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td>Location</td>
//                   <td>{job.location || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td>Job Type</td>
//                   <td>{job.jobType || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td>Qualification</td>
//                   <td>{job.qualification || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td>Main Stream</td>
//                   <td>{jobDescription.mainStream || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td>Experience</td>
//                   <td>{job.experience || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td>Last Date</td>
//                   <td>{jobDescription.lastdate || 'N/A'}</td>
//                 </tr>
//               </tbody>
//             </table>

//             <h4>Additional Information:</h4>
//             <div className="headings-section">
//               {jobDescription.headings?.length > 0 ? (
//                 jobDescription.headings.map((headingItem, index) => (
//                   <div key={index} className="heading-item">
//                     <h5 className="heading-title">{headingItem.heading}</h5>
//                     <ul className="content-list">
//                       {headingItem.content.map((contentItem, i) => (
//                         <li key={i}>{contentItem}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))
//               ) : (
//                 <p>No additional information available.</p>
//               )}
//             </div>

//             <div className="apply-button-container">
//               <button
//                 className="apply-now-button apply-button"
//                 onClick={() => window.open(job.applyNowLink, '_blank')}
//               >
//                 Apply Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default JobDetails;









//Main code ____________________________________________________________________________________________________________________
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/JobDetails.css';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/home/${id}`); // Use env variable for API URL
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  useEffect(() => {
    if (job) {
      // Update the document title to the job title
      document.title = `${job.title} - Job Details`; // Customize the title as needed
    }
  }, [job]); // This effect runs whenever 'job' changes

  if (loading) {
    return (
      <div className="loading-spinner">
        <div></div>
      </div>
    );
  }

  if (!job) {
    return <div>Error loading job details</div>;
  }

  const jobDescription = job.jobDescription || {};

  return (
    <div className="bgcol">
      <div className="job-details-container">
        <h1 className="job-title">{job.title}</h1> 
        <h2><i style={{ color: "red" }}>Company: </i>{job.company}</h2>

        <div className="job-summary">
          <div className="job-info">
            <span className="icon experience-icon">📅</span>
            <span>{job.experience}</span>
          </div>
          <div className="job-info">
            <span className="icon salary-icon">💼</span>
            <span>{job.salary}</span>
          </div>
          <div className="job-info">
            <span className="icon qualification-icon">🎓</span>
            <span>{job.qualification}</span>
          </div>
          <div className="job-info">
            <span className="icon location-icon">📍</span>
            <span>{job.location}</span>
          </div>
        </div>

      

        <div className="job-details">
          <h3>Posted: {new Date(job.postedDate).toLocaleDateString()}</h3>
          <h4>Job Description</h4>
          <p>{job.description || 'No description available.'}</p>

          <h4>Job Information:</h4>
          <table className="job-details-table">
            <tbody>
              {/* <tr>
                <td>Workplace Type</td>
                <td>{jobDescription.workplaceType || 'N/A'}</td>
              </tr> *}
              <tr>
                <td>JobRole</td>
                <td>{job.jobRole || 'N/A'}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{job.location || 'N/A'}</td>
              </tr>
              {/* <tr>
                <td>Position Title</td>
                <td>{jobDescription.positionTitle || 'N/A'}</td>
              </tr> *}
              {/* <tr>
                <td>Job Function</td>
                <td>{jobDescription.jobFunction || 'N/A'}</td>
              </tr> *}
              <tr>
                <td>Job Type</td>
                <td>{job.jobType || 'N/A'}</td>
              </tr>
              <tr>
                <td>Qualifiction</td>
                <td>{job.qualification || 'N/A'}</td>
              </tr>
              <tr>
                <td>Main Stream</td>
                <td>{jobDescription.mainStream || 'N/A'}</td>
              </tr>
              <tr>
                <td>Experience</td>
                <td>{job.experience || 'N/A'}</td>
              </tr>
              <tr>
                <td>Last Date</td>
                <td>{jobDescription.lastdate || 'N/A'}</td>
              </tr>
            </tbody>
          </table>

          {/* <h4>Responsibilities:</h4>
          <ul>
            {jobDescription.responsibilities?.length > 0 ? (
              jobDescription.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))
            ) : (
              <li>No responsibilities listed.</li>
            )}
          </ul>

          <h4>Required Qualifications, Capabilities, and Skills:</h4>
          <ul>
            {jobDescription.qualifications?.length > 0 ? (
              jobDescription.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))
            ) : (
              <li>No qualifications listed.</li>
            )}
          </ul>

          <h4>Benefits:</h4>
          <ul>
            {jobDescription.benefits?.length > 0 ? (
              jobDescription.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))
            ) : (
              <li>No benefits listed.</li>
            )}
          </ul> *}


          <h4>Additional Information:</h4>
          <div className="headings-section">
            {jobDescription.headings?.length > 0 ? (
              jobDescription.headings.map((headingItem, index) => (
                <div key={index} className="heading-item">
                  <h5 className="heading-title">{headingItem.heading}</h5>
                  <ul className="content-list">
                    {headingItem.content.map((contentItem, i) => (
                      <li key={i}>{contentItem}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p>No additional information available.</p>
            )}
          </div>

          <div className="apply-button-container">
          <button className="apply-now-button apply-button"
            onClick={() => window.open(job.applyNowLink, '_blank')} 
          >
            Apply Now
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

*/






/*

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/JobDetails.css';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/home/${id}`); // Use env variable for API URL
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  useEffect(() => {
    if (job) {
      document.title = `${job.title} - Job Details`; // Customize the title as needed
    }
  }, [job]);

  if (loading) {
    return (
      <div className="loading-spinner">
        <div></div>
      </div>
    );
  }

  if (!job) {
    return <div>Error loading job details</div>;
  }

  const jobDescription = job.jobDescription || {};

  return (
    <div className="bgcol">
      <div className="job-details-container">
        <h1 className="job-title">{job.title}</h1> 
        <h2><i style={{ color: "red" }}>Company: </i>{job.company}</h2>

        <div className="job-summary">
          <div className="job-info">
            <span className="icon experience-icon">📅</span>
            <span>{job.experience}</span>
          </div>
          <div className="job-info">
            <span className="icon salary-icon">💼</span>
            <span>{job.salary}</span>
          </div>
          <div className="job-info">
            <span className="icon qualification-icon">🎓</span>
            <span>{job.qualification}</span>
          </div>
          <div className="job-info">
            <span className="icon location-icon">📍</span>
            <span>{job.location}</span>
          </div>
        </div>

        <div className="apply-button-container">
          <button className="apply-now-button apply-button"
            onClick={() => window.open(job.applyNowLink, '_blank')} 
          >
            Apply Now
          </button>
        </div>

        <div className="job-details">
          <h3>Posted: {new Date(job.postedDate).toLocaleDateString()}</h3>
          <h4>Job Description</h4>
          <p>{jobDescription.description || 'No description available.'}</p>

          <h4>Job Information:</h4>
          <table className="job-details-table">
            <tbody>
             
            </tbody>
          </table>

          <h4>Responsibilities:</h4>
          <ul>
            {jobDescription.responsibilities?.length > 0 ? (
              jobDescription.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))
            ) : (
              <li>No responsibilities listed.</li>
            )}
          </ul>

          <h4>Required Qualifications, Capabilities, and Skills:</h4>
          <ul>
            {jobDescription.qualifications?.length > 0 ? (
              jobDescription.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))
            ) : (
              <li>No qualifications listed.</li>
            )}
          </ul>

          <h4>Benefits:</h4>
          <ul>
            {jobDescription.benefits?.length > 0 ? (
              jobDescription.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))
            ) : (
              <li>No benefits listed.</li>
            )}
          </ul>

          <h4>Additional Information:</h4>
          <div className="headings-section">
            {jobDescription.headings?.length > 0 ? (
              jobDescription.headings.map((headingItem, index) => (
                <div key={index} className="heading-item">
                  <h5 className="heading-title">{headingItem.heading}</h5>
                  <ul className="content-list">
                    {headingItem.content.map((contentItem, i) => (
                      <li key={i}>{contentItem}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p>No additional information available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
*/

























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import '../styles/JobDetails.css';
// import { Helmet } from 'react-helmet'; // Import React Helmet

// const JobDetails = () => {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobDetails = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/home/${id}`); // Use env variable for API URL
//         setJob(response.data);
//       } catch (error) {
//         console.error('Error fetching job details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobDetails();
//   }, [id]);

//   useEffect(() => {
//     if (job) {
//       // Update the document title to the job title
//       document.title = `${job.title} - Job Details`; // Customize the title as needed
//     }
//   }, [job]); // This effect runs whenever 'job' changes

//   if (loading) {
//     return (
//       <div className="loading-spinner">
//         <div></div>
//       </div>
//     );
//   }

//   if (!job) {
//     return <div>Error loading job details</div>;
//   }

//   const jobDescription = job.jobDescription || {};

//   return (
//     <>
//       {/* React Helmet for dynamic SEO */}
//       <Helmet>
//         <title>{job.title} - Job Details</title>
//         <meta name="description" content={`${job.title} at ${job.company}: ${job.description}`} />
//         <meta name="keywords" content={`${job.title}, ${job.company}, job details, job description, career opportunities`} />
//         <meta property="og:title" content={`${job.title} - Job Details`} />
//         <meta property="og:description" content={`${job.title} at ${job.company}: ${job.description}`} />
//         <meta property="og:url" content={`https://www.jobhustles.com/job/${job._id}`} />
//         <meta property="og:image" content={job.imageUrl || 'https://www.jobhustles.com/images/logo.png'} />
//       </Helmet>

//       <div className="bgcol">
//         <div className="job-details-container">
//           <h1 className="job-title">{job.title}</h1>
//           <h2><i style={{ color: "red" }}>Company: </i>{job.company}</h2>

//           <div className="job-summary">
//             <div className="job-info">
//               <span className="icon experience-icon">📅</span>
//               <span>{job.experience}</span>
//             </div>
//             <div className="job-info">
//               <span className="icon salary-icon">💼</span>
//               <span>{job.salary}</span>
//             </div>
//             <div className="job-info">
//               <span className="icon qualification-icon">🎓</span>
//               <span>{job.qualification}</span>
//             </div>
//             <div className="job-info">
//               <span className="icon location-icon">📍</span>
//               <span>{job.location}</span>
//             </div>
//           </div>

//           <div className="job-details">
//             <h3>Posted: {new Date(job.postedDate).toLocaleDateString()}</h3>
//             <h4>Job Description</h4>
//             <p>{job.description || 'No description available.'}</p>

//             <h4>Job Information:</h4>
//             <table className="job-details-table">
//               <tbody>
//                 <tr>
//                   <td>JobRole</td>
//                   <td>{job.jobRole || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td>Location</td>
//                   <td>{job.location || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td>Job Type</td>
//                   <td>{job.jobType || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td>Qualification</td>
//                   <td>{job.qualification || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td>Main Stream</td>
//                   <td>{jobDescription.mainStream || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td>Experience</td>
//                   <td>{job.experience || 'N/A'}</td>
//                 </tr>
//                 <tr>
//                   <td>Last Date</td>
//                   <td>{jobDescription.lastdate || 'N/A'}</td>
//                 </tr>
//               </tbody>
//             </table>

//             <h4>Additional Information:</h4>
//             <div className="headings-section">
//               {jobDescription.headings?.length > 0 ? (
//                 jobDescription.headings.map((headingItem, index) => (
//                   <div key={index} className="heading-item">
//                     <h5 className="heading-title">{headingItem.heading}</h5>
//                     <ul className="content-list">
//                       {headingItem.content.map((contentItem, i) => (
//                         <li key={i}>{contentItem}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))
//               ) : (
//                 <p>No additional information available.</p>
//               )}
//             </div>

//             <div className="apply-button-container">
//               <button className="apply-now-button apply-button"
//                 onClick={() => window.open(job.applyNowLink, '_blank')} 
//               >
//                 Apply Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default JobDetails;