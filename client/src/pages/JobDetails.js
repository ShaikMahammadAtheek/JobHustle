import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/JobDetails.css';
import { Helmet } from 'react-helmet'; // Import React Helmet

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
    <>
      {/* React Helmet for dynamic SEO */}
      <Helmet>
        <title>{job.title} - Job Details</title>
        <meta name="description" content={`${job.title} at ${job.company}: ${job.description}`} />
        <meta name="keywords" content={`${job.title}, ${job.company}, job details, job description, career opportunities`} />
        <meta property="og:title" content={`${job.title} - Job Details`} />
        <meta property="og:description" content={`${job.title} at ${job.company}: ${job.description}`} />
        <meta property="og:url" content={`https://www.jobhustles.com/job/${job._id}`} />
        <meta property="og:image" content={job.imageUrl || 'https://www.jobhustles.com/images/logo.png'} />
      </Helmet>

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
                <tr>
                  <td>JobRole</td>
                  <td>{job.jobRole || 'N/A'}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>{job.location || 'N/A'}</td>
                </tr>
                <tr>
                  <td>Job Type</td>
                  <td>{job.jobType || 'N/A'}</td>
                </tr>
                <tr>
                  <td>Qualification</td>
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
    </>
  );
};

export default JobDetails;










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