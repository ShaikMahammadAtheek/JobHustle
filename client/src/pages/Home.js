import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet'; // Import React Helmet for SEO management
import Card from '../components/Card'; // Assuming you have a Card component
import Spinner from '../components/Spinner'; // Import Spinner component
import './Homes.css'; // General styles
import './HomesType.css'; // Specific job-type section styles
import OffCampuss from '../TypeCards/OffCampuss';
import Internshipss from '../TypeCards/Internshipss';
import Fresherss from '../TypeCards/Fresherss';
import Experiencess from '../TypeCards/Experiencess';
import Welcome from '../components/Welcome'
// import Latestjobs from '../TypeCards/Latestjobs';
const Home = () => {
  const [jobs, setJobs] = useState([]); // State for storing jobs
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/home`);
        setJobs(response.data); // Set jobs in state
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Could not fetch jobs, please try again later.'); // Set error message
      } finally {
        setLoading(false); // Stop loading after fetch
      }
    };

    fetchJobs();
  }, []); // Run once on component mount

  // SEO metadata for the Home page
  //const pageTitle = "JobHustles - Freshers Job Portal for job Opportunities and Career Advice";
  //const pageDescription = "Find the latest job openings, internships, and career advice at JobHustles. Join our community to boost your career!";
  //const pageUrl = `${window.location.origin}/home`; // Dynamic URL for SEO
  //const pageImage = `${window.location.origin}/jh.png`; // Default image for SEO

  // Structured Data for Job Portal (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JobHustles",
    "url": "https://jobhustles.com",
    "logo": `${window.location.origin}/jh.png`,
    "sameAs": [
        "https://t.me/Jobs_hustle",
        "https://www.instagram.com/jobhustles_/profilecard/?igsh=MXhzZng3bm56cTBxZA==",
        "https://whatsapp.com/channel/0029VajnMvaKWEKzCKLMt40P",
        "https://www.linkedin.com/company/jobhustles",
        "https://twitter.com/jobhustles"
    ]
  };

  return (
    <>
      {/* React Helmet for SEO optimization */}
      <Helmet>
        {/* <meta charset="UTF-8" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="job portal, career opportunities, internships, job listings, JobHustles" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} /> */}


<meta charset="UTF-8" />
        <title>JobHustles - Best Job Portal for Freshers, Internships & Career Opportunities</title>
        <meta 
          name="description" 
          content="JobHustles is the best job portal for freshers and professionals. Find the latest job openings, internships, career advice, and job opportunities in various industries. Start your career today with JobHustles!"
        />
        <meta 
          name="keywords" 
          content="job portal, freshers job, internships, job opportunities, career advice, job listings, online jobs, career growth, job search, full-time jobs, part-time jobs, entry-level jobs, JobHustles"
        />
        <meta property="og:title" content="JobHustles - Best Job Portal for Freshers, Internships & Career Opportunities" />
        <meta 
          property="og:description" 
          content="Discover top job openings and internships for freshers and professionals. Explore career advice, job opportunities in various fields, and more at JobHustles."
        />
        <meta property="og:image" content={`${window.location.origin}/jh.png`} />
        <meta property="og:url" content={`${window.location.origin}/home`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JobHustles - Best Job Portal for Freshers, Internships & Career Opportunities" />
        <meta 
          name="twitter:description" 
          content="Find job openings, internships, and career advice at JobHustles. Your career journey starts here."
        />
        <meta name="twitter:image" content={`${window.location.origin}/jh.png`} />
        {/* Structured Data for Job Portal */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Welcome />
      <div>
        <h1 style={{ "color": "red" }} id='mainhomeheading'>Explore Latest Trending Jobs</h1>

        {/* Section to show all jobs */}
        <section className="job-cards">
          {/* <h1 style={{ textAlign: 'center' }}>Explore All Latest Jobs</h1> */}

          {loading ? (
            <Spinner /> // Show spinner while loading
          ) : error ? (
            <p className="error">{error}</p> // Show error message if there's an error
          ) : (
            <div className="carts">
              {jobs.map((job) => (
                <Card key={job._id} job={job} />
              ))}
            </div>
          )}
        </section>

        <div>
          <Fresherss />
          <Experiencess />
          <Internshipss />
          <OffCampuss />
        </div>
        {/* <Latestjobs/> */}
      </div>
    </>
  );
};

export default Home;










//Main code---------------------------------------------------------------------------------------------------------------



// Fresher Voice code 2...


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Card from '../components/Card'; // Assuming you have a Card component
// import Spinner from '../components/Spinner'; // Import Spinner component
// import './Homes.css'; // General styles
// import './HomesType.css'; // Specific job-type section styles
// // import { Link } from 'react-router-dom';
// import OffCampuss from '../TypeCards/OffCampuss';
// import Internshipss from '../TypeCards/Internshipss';
// import Fresherss from '../TypeCards/Fresherss';
// import Experiencess from '../TypeCards/Experiencess';
// import Welcome from '../components/Welcome'

// const Home = () => {
//     const [jobs, setJobs] = useState([]); // State for storing jobs
//     // const [groupedJobs, setGroupedJobs] = useState({}); // State for grouped jobs by type
//     const [loading, setLoading] = useState(true); // Loading state
//     const [error, setError] = useState(null); // State to handle errors

//     // Fetch jobs from the backend and group them by jobType
//     useEffect(() => {
//         const fetchJobs = async () => {
//             try {
//                 setLoading(true); // Start loading
//                 const response = await axios.get(`${process.env.REACT_APP_API_URL}/home`);
//                 const jobsData = response.data;

//                 // Group jobs by jobType, but exclude 'Other' jobs
//                 // const grouped = jobsData.reduce((acc, job) => {
//                 //     if (job.jobType) { // Exclude jobs without a jobType
//                 //         const type = job.jobType;
//                 //         if (!acc[type]) {
//                 //             acc[type] = [];
//                 //         }
//                 //         acc[type].push(job);
//                 //     }
//                 //     return acc;
//                 // }, {});

//                 setJobs(jobsData); // Set the jobs in state
//                 // setGroupedJobs(grouped); // Set grouped jobs
//             } catch (error) {
//                 console.error('Error fetching jobs:', error);
//                 setError('Could not fetch jobs, please try again later.'); // Set error message
//             } finally {
//                 setLoading(false); // Stop loading after fetch
//             }
//         };

//         fetchJobs();
//     }, []); // Run once on component mount

//     return (
//         <>
//         <Welcome />
//         <div>
            
//             <h1 style={{"color":"red"}} id='mainhomeheading'>Let's Search Your Carear Jobs From Here!...</h1>
//             {/* Section to show all jobs */}
//             <section className="job-cards">
//                 <h1 style={{ textAlign: 'center' }}>Explore All Latest Jobs</h1>


//                 {loading ? (
//                     <Spinner /> // Show spinner while loading
//                 ) : error ? (
//                     <p className="error">{error}</p> // Show error message if there's an error
//                 ) : (
//                     <div className="carts">
//                         {jobs.map((job) => (
//                             <Card key={job._id} job={job} />
//                         ))}
//                     </div>
//                 )}
//             </section>

//             <div>
            
           
//             <Fresherss/>
//             <Experiencess/>
//             <Internshipss/>
//             <OffCampuss/>
//             </div>
            
          
//             {/* <section className="grouped-job-cards">
//                 {Object.keys(groupedJobs).map((jobType) => (
//                     <div key={jobType} className="job-group">
//                         <Link to={`/${jobType.toLowerCase()}`} className="job-group-heading-link">
//                             <h2 className="job-group-heading">{jobType}</h2>
//                         </Link>
//                         <div className="job-group-cards">
//                             {groupedJobs[jobType].map((job) => (
//                                 <Link to={`/job/${job._id}`} key={job._id} className="HomesJobidLink">
//                                     <div className="job-card">
//                                         <img src={job.imageUrl} alt={job.title} className="job-image" />
//                                         <h3 className="job-title">{job.title}</h3>
//                                     </div>
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </section> */}
//         </div>
//         </>
//     );
// };

// export default Home;




















































































// Fresher Voice code 1...
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card'; // Assuming you have a Card component
import './Homes.css';  // General styles
 import './HomesType.css';  // Specific job-type section styles
import { Link } from 'react-router-dom';

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [groupedJobs, setGroupedJobs] = useState({});

    // Fetch jobs from the backend and group them by jobType
    useEffect(() => {
        axios.get('https://jobs-hustle.onrender.com/api/home') // Fetch sorted jobs
            .then((response) => {
                const jobsData = response.data;

                // Group jobs by jobType, but exclude 'Other' jobs
                const grouped = jobsData.reduce((acc, job) => {
                    if (job.jobType) { // Exclude jobs without a jobType
                        const type = job.jobType;
                        if (!acc[type]) {
                            acc[type] = [];
                        }
                        acc[type].push(job);
                    }
                    return acc;
                }, {});

                setJobs(jobsData); // Set the jobs in state
                setGroupedJobs(grouped); // Set grouped jobs
            })
            .catch((error) => {
                console.error('Error fetching jobs:', error);
                alert('Could not fetch jobs, please try again later.');
            });
    }, []);

    return (
        <div>
            <section className="job-cards">
                <div>
                    <h1 style={{ textAlign: 'center' }}>All Jobs</h1>
                </div>
                {loading ? ( // Conditional rendering based on loading state
                    <Spinner /> // Show spinner while loading
                ) : (
                    <div className="carts">
                        {jobs.map((job) => (
                            <Card key={job._id} job={job} />
                        ))}
                    </div>
                )}
            </section>
            <section className="grouped-job-cards">
    {Object.keys(groupedJobs).map((jobType) => (
        <div key={jobType} className="job-group">
            <Link to={`/${jobType.toLowerCase()}`} className="job-group-heading-link">
                <h2 className="job-group-heading">{jobType}</h2>
            </Link>
            <div className="job-group-cards">
                {groupedJobs[jobType].map((job) => (
                 <Link to={`/job/${job._id}`} className='HomesJobidLink'>
                    <div key={job._id} className="job-card">
                        <img src={job.imageUrl} alt={job.title} className="job-image" />
                        <h3 className="job-title">{job.title}</h3>
                    </div>
                 </Link>
                ))}
            </div>
        </div>
    ))}
</section>


        </div>
    );
};

export default Home;


*/



/*
// latest Main Code....
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card'; // Assuming you have a Card component
// import '../styles/Home.css';
import Spinner from '../components/Spinner';
import './Homes.css';
import { Link } from 'react-router-dom';


const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true); // Initialize loading state

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true); // Set loading to true before fetching
                const response = await axios.get('https://jobs-hustle.onrender.com/api/home'); // Fetch sorted jobs
                setJobs(response.data); // Set the jobs in state
            } catch (error) {
                console.error('Error fetching jobs:', error);
                alert('Could not fetch jobs, please try again later.');
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
                    <h1 style={{ textAlign: 'center' }}>All Jobs</h1>
                </div>
                {loading ? ( // Conditional rendering based on loading state
                    <Spinner /> // Show spinner while loading
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
export default Home;

*/



//Main code
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card'; // Assuming you have a Card component
import Spinner from '../components/Spinner'; // Import your Spinner component
import '../styles/Home.css';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true); // Initialize loading state

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true); // Set loading to true before fetching
                const response = await axios.get('https://jobs-hustle.onrender.com/api/home'); // Fetch sorted jobs
                setJobs(response.data); // Set the jobs in state
            } catch (error) {
                console.error('Error fetching jobs:', error);
                alert('Could not fetch jobs, please try again later.');
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
                    <h1 style={{ textAlign: 'center' }}>All Jobs</h1>
                </div>
                {loading ? ( // Conditional rendering based on loading state
                    <Spinner /> // Show spinner while loading
                ) : (
                    <div className="job-grid">
                        {jobs.map((job) => (
                            <Card key={job._id} job={job} />
                        ))}
                    </div>
                )}
            </section>

            <section className="top-components">
                <h2 style={{ backgroundColor: 'lightgray' }}>Top Components This Week</h2>
                <div className="top-card-grid jobss">
                    {jobs
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))  // Sort jobs by latest first
                        .slice(0, 5)  // Take the first 5 jobs
                        .map((job) => (
                            <div key={job._id} className="top-card">
                                {job.imageUrl && <img src={job.imageUrl} alt={job.title} className="job-card-image" />}
                                <h1>{job.title}</h1>
                                <p>{job.description}</p>
                                <p>{job.location}</p>
                                <h1>{job.walkInDate && <p className="card-date">{new Date(job.walkInDate).toLocaleDateString()}</p>}</h1>
                                <Link to={`/job/${job._id}`} className="card-link">View Details</Link>
                            </div>
                        ))}
                </div>
                <button onClick={() => window.open('https://youtube.com', '_blank')}>Subscribe</button>
            </section>
        </div>
    );
};

export default Home;
*/
































/*
//fetch jobs data from database
// Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card'; // Assuming you have a Card component to display jobs
import '../styles/Home.css';
import './Home.css';

const Home = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/home')  // Fetch all job data from the backend
            .then((response) => {
                setJobs(response.data);  // Update jobs with response data
            })
            .catch((error) => {
                console.error('Error fetching jobs:', error);
                alert('Could not fetch jobs, please try again later.');
            });
    }, []);

    // Group jobs by type:- it is used to group the by thier type and Disply all Jobs
    //Later we use this
//    const groupedJobs = jobs.reduce((acc, job) => {
//        (acc[job.jobType] = acc[job.jobType] || []).push(job);
//        return acc;
//    }, {});
//
//
    return (
       
        <div>
            <section className="job-cards">
            <h1 style={{ textAlign: 'center' }}>All Jobs</h1>
            <div className="job-grid">
                {jobs.map((job) => (
                    <Card key={job._id} job={job} />
                ))}
            </div>
            </section>

            <section className="top-components">
                <h2 style={{ backgroundColor: 'lightgray' }}>Top Components This Week</h2>
                <div className="top-card-grid">
                    
                    <div className="top-card">Top Card 1</div>
                    <div className="top-card">Top Card 2</div>
                    <div className="top-card">Top Card 3</div>
                    <div className="top-card">Top Card 4</div>
                    <div className="top-card">Top Card 5</div>
                </div>
                <button onClick={() => window.open('https://youtube.com', '_blank')}>Subscribe</button>
            </section>

            <section className="feedback-form">
                <h2>Feedback</h2>
                <form>
                    <label>
                        Your Feedback:
                        <textarea rows="4" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>

    );
};

*/

/*<div>
<h1 style={{ textAlign: 'center' }}>All Job Types</h1>
{Object.keys(groupedJobs).map((jobType) => (
  <div key={jobType}>
    <h2>{jobType}</h2>
    <div className="job-list">
      {groupedJobs[jobType].slice(0, 8).map((job) => (
        <div key={job._id} className="job-card">
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.description}</p>
          <img src={job.imageUrl} alt={job.title} />
        </div>
      ))}
    </div>
  </div>
))}
</div>
);
};




export default Home;

*/





