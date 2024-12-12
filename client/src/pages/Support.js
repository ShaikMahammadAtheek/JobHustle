
//Main code________________________________________________________________________________________

import '../styles/Support.css';
import React, { useState } from 'react';
import axios from 'axios';

const Support = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  
  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/feedback`, feedback); // Use env variable for API URL
      if (response.data.success) {
        setStatus('Feedback submitted successfully!');
        // Hide the message after 5 seconds
        setTimeout(() => {
          setStatus('');
        }, 5000);
        setFeedback({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      setStatus('Error submitting feedback.');
    }
  };

  return (
    <div className="support-container">
      <h1 className='Supporth1'>How can we help?</h1>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={feedback.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
    
        <input
          type="email"
          name="email"
          value={feedback.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
            
        <textarea
          name="message"
          value={feedback.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Submit</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default Support;

