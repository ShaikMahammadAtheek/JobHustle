
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';  // Import React Helmet
import '../TypeCardsStyle/OffCampuss.css'; // Your existing CSS file
import { Link } from 'react-router-dom';

const Internshipss = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/internships`); // Fetch sorted jobs
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
           
            <Helmet>
                <title>Internship Opportunities | JobHustles</title> {/* Dynamic title */}
                <meta name="description" content="Explore the latest internship opportunities at JobHustles. Browse internships and start your career journey today." /> {/* Dynamic description */}
                <meta name="keywords" content="internships, career development, internships for students, job search, start your career, internships 2024" /> {/* Dynamic keywords */}
                <meta property="og:title" content="Internship Opportunities | JobHustles" /> {/* Open Graph title */}
                <meta property="og:description" content="Find internships in various industries on JobHustles. Start your career with the best internship opportunities." /> {/* Open Graph description */}
                <meta property="og:image" content="https://www.jobhustles.com/images/internship-opportunities-banner.jpg" /> {/* Open Graph image */}
                <meta property="og:url" content="https://www.jobhustles.com/internships" /> {/* Open Graph URL */}
                <meta property="og:type" content="website" /> {/* Open Graph type */}
                <meta name="twitter:card" content="summary_large_image" /> {/* Twitter card */}
                <meta name="twitter:title" content="Internship Opportunities | JobHustles" /> {/* Twitter title */}
                <meta name="twitter:description" content="Discover internship opportunities across various fields at JobHustles and boost your career prospects." /> {/* Twitter description */}
                <meta name="twitter:image" content="https://www.jobhustles.com/images/internship-opportunities-banner.jpg" /> {/* Twitter image */}
            </Helmet>

            <div className="offcampus-container">
                <Link to='/internships' className="job-type-heading-link">
                    <h2 className="job-type-heading">Internships</h2>
                </Link>
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
                                            <h1 className="job-type-title">{job.title}</h1>
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

export default Internshipss;







//Main Code______________________________________________________________________________



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../TypeCardsStyle/OffCampuss.css'; // Make sure your CSS file is correct
// import { Link } from 'react-router-dom';
// // import './OffCampuss.css'
// const Internshipss = () => {
//     const [jobs, setJobs] = useState([]);

//     useEffect(() => {
//         const fetchJobs = async () => {
//             try {
//                 const response = await axios.get(`${process.env.REACT_APP_API_URL}/internships`); // Fetch sorted jobs
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
        
//         <div className="offcampus-container">
//         <Link to='/internships' className="job-type-heading-link">
//                             <h2 className="job-type-heading">Internships</h2>
//                         </Link>
//         <div className="inner-container">
        
//             <section className="offcampus-section">
            
//                 <div className="job-type-main">
//                     {jobs
//                         .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))  // Sort jobs by latest first
//                         .slice(0, 6)
//                         .map((job) => (
//                             <div className="job-type-card" key={job._id}>
//                                 <Link to={`/job/${job._id}`} className='job-type-link'>
//                                     {job.imageUrl && <img className="job-type-image" src={job.imageUrl} alt={job.title} />}
//                                     <h1 className="job-type-title">{job.title}</h1>
//                                 </Link>
//                             </div>
//                         ))}
//                 </div>
//             </section>
//             </div>
//             </div> 
        
//         </>
//     );
// };

// export default Internshipss;




















































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../TypeCardsStyle/OffCampuss.css'; // Make sure your CSS file is correct
// import { Link } from 'react-router-dom';

// const Internshipss = () => {
//     const [jobs, setJobs] = useState([]);

//     useEffect(() => {
//         const fetchJobs = async () => {
//             try {
//                 const response = await axios.get(`${process.env.REACT_APP_API_URL}/internships`); // Fetch sorted jobs
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
//                             <h2 className="job-group-heading">Internships</h2>
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

// export default Internshipss;




