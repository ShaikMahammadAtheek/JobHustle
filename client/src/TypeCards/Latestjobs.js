import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../TypeCardsStyle/Latestjobs.css'; // Ensure the path to your CSS file is correct
import { Link } from 'react-router-dom';

const Latestjobs = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/home`);
        setJobs(response.data); // Store all jobs
      } catch (error) {
        console.error('Error fetching jobs:', error);
        alert('Could not fetch jobs, please try again later.');
      }
    };

    fetchJobs();
  }, []);

  // Calculate the current jobs to display
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Calculate pagination numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(jobs.length / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Logic for displaying 5 page numbers (centered)
  const pageRangeStart = Math.max(1, currentPage - 2);
  const pageRangeEnd = Math.min(pageNumbers.length, currentPage + 2);
  const visiblePageNumbers = pageNumbers.slice(pageRangeStart - 1, pageRangeEnd);

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="latest-jobs-container">
      <h1 className="latest-jobs-title">Latest Jobs</h1>
      <div className="jobs-list">
        {currentJobs.map((job) => (
          <Link to={`/job/${job._id}`} className="job-cards" key={job._id}>
            <div className="job-left-section">
              <img
                src={job.imageUrl || `${window.location.origin}/jh.png`}
                alt={job.title}
                className="job-thumbnail"
              />
            </div>
            <div className="job-right-section">
              <h2 className="job-title">{job.title}</h2>
              <p className="job-company">{job.company}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="pagination-controls">
        <button
          className="pagination-button"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <div className="page-numbers">
          {visiblePageNumbers.map((number) => (
            <button
              key={number}
              className={`page-number ${currentPage === number ? 'active' : ''}`}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </button>
          ))}
        </div>

        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage === pageNumbers.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Latestjobs;
