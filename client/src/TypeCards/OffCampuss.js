// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Helmet } from 'react-helmet'; // Import React Helmet for dynamic SEO
// import '../TypeCardsStyle/OffCampuss.css'; // Make sure your CSS file is correct
// import { Link } from 'react-router-dom';

// const OffCampuss = () => {
//     const [jobs, setJobs] = useState([]);

//     useEffect(() => {
//         const fetchJobs = async () => {
//             try {
//                 const response = await axios.get(`${process.env.REACT_APP_API_URL}/offcampus`); // Fetch sorted jobs
//                 setJobs(response.data); // Set the jobs in state
//             } catch (error) {
//                 console.error('Error fetching jobs:', error);
//                 alert('Could not fetch jobs, please try again later.');
//             }
//         };

//         fetchJobs();
//     }, []);

//     return (
//         <>
            
//             <Helmet>
//                 <title>Off-Campus Opportunities | JobHustles</title> {/* Dynamic title */}
//                 <meta name="description" content="Explore the latest off-campus job opportunities at JobHustles. Find the best opportunities for freshers and experienced professionals." /> {/* Dynamic description */}
//                 <meta name="keywords" content="off-campus jobs, job search, freshers, experienced jobs, walk-in interviews, job opportunities" /> {/* Dynamic keywords */}
//                 <meta property="og:title" content="Off-Campus Opportunities | JobHustles" /> {/* Open Graph title */}
//                 <meta property="og:description" content="Browse through off-campus job opportunities and walk-in interviews on JobHustles. Find jobs that match your skills and experience." /> {/* Open Graph description */}
//                 <meta property="og:image" content="https://www.jobhustles.com/images/off-campus-jobs-banner.jpg" /> {/* Open Graph image */}
//                 <meta property="og:url" content="https://www.jobhustles.com/off-campus" /> {/* Open Graph URL */}
//                 <meta property="og:type" content="website" /> {/* Open Graph type */}
//                 <meta name="twitter:card" content="summary_large_image" /> {/* Twitter card */}
//                 <meta name="twitter:title" content="Off-Campus Opportunities | JobHustles" /> {/* Twitter title */}
//                 <meta name="twitter:description" content="Looking for off-campus job opportunities? Explore the best job listings and walk-in interviews at JobHustles." /> {/* Twitter description */}
//                 <meta name="twitter:image" content="https://www.jobhustles.com/images/off-campus-jobs-banner.jpg" /> {/* Twitter image */}
//             </Helmet>

//             <div className="offcampus-container">
//                 <div className='humsuk'>
//                     <Link to='/off-campus' className="job-type-heading-link">
//                         <h2 className="job-type-heading">OffCampus</h2>
//                     </Link>
//                 </div>
//                 <div className="inner-container">
//                     <section className="offcampus-section">
//                         <div className="job-type-main">
//                             {jobs
//                                 .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))  // Sort jobs by latest first
//                                 .slice(0, 6)
//                                 .map((job) => (
//                                     <div className="job-type-card" key={job._id}>
//                                         <Link to={`/job/${job._id}`} className='job-type-link'>
//                                             {job.imageUrl && <img className="job-type-image" src={job.imageUrl} alt={job.title} />}
//                                             <div className="thumb">
//                                                 <h1 className="job-type-title">{job.title}</h1>
//                                                 <h1>{job.walkInDate && <p className="card-date">{new Date(job.walkInDate).toLocaleDateString()}</p>}</h1>
//                                             </div>
//                                         </Link>
//                                     </div>
//                                 ))}
//                         </div>
//                     </section>
//                 </div>
//             </div> 
//         </>
//     );
// };

// export default OffCampuss;





//Main Code_________________________________________________________________________
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../TypeCardsStyle/OffCampuss.css'; // Make sure your CSS file is correct
import { Link } from 'react-router-dom';

const OffCampuss = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/offcampus`); // Fetch sorted jobs
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
            <div className='humsuk'>
        <Link to='/off-campus' className="job-type-heading-link">
            <h2 className="job-type-heading">OffCampus</h2>
        </Link>
        </div>
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
                                    <div className="thumb">
                                    <h1 className="job-type-title">{job.title}</h1>
                                    <h1>{job.walkInDate && <p className="card-date">{new Date(job.walkInDate).toLocaleDateString()}</p>}</h1>
                                    </div>
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

export default OffCampuss;


















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../TypeCardsStyle/OffCampuss.css'; // Make sure your CSS file is correct
// import { Link } from 'react-router-dom';

// const OffCampuss = () => {
//     const [jobs, setJobs] = useState([]);

//     useEffect(() => {
//         const fetchJobs = async () => {
//             try {
//                 const response = await axios.get(`${process.env.REACT_APP_API_URL}/offcampus`); // Fetch sorted jobs
//                 setJobs(response.data); // Set the jobs in state
//             } catch (error) {
//                 console.error('Error fetching jobs:', error);
//                 alert('Could not fetch jobs, please try again later.');
//             }
//         };

//         fetchJobs();
//     }, []);

//     return (
//         <>
//         <Link to={`/`} className="job-group-heading-link">
//                             <h2 className="job-group-heading">OffCampus</h2>
//                         </Link>
//         <div className="offcampus-container">
            
//             <section className="offcampus-section">
//                 <div className="job-grid">
//                     {jobs
//                         .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))  // Sort jobs by latest first
//                         .slice(0, 6)
//                         .map((job) => (
//                             <div className="job-card" key={job._id}>
//                                 <Link to={`/job/${job._id}`}>
//                                     {job.imageUrl && <img className="job-image" src={job.imageUrl} alt={job.title} />}
//                                     <h1 className="job-title">{job.title}</h1>
//                                 </Link>
//                             </div>
//                         ))}
//                 </div>
//             </section>
//         </div>
//         </>
//     );
// };

// export default OffCampuss;


