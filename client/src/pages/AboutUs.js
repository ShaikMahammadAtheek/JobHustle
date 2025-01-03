import React from 'react';
import '../styles/AboutUs.css';  // Make sure to create a CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <p>
        Welcome to <strong>JobHustle</strong>! We are committed to bridging the gap
        between job seekers and their dream careers. Our platform provides
        regular updates on <strong>Freshers Jobs</strong>, <strong>Experience Jobs</strong>, <strong>Off-Campus Drives</strong>,
        <strong> Walk-ins</strong>, and opportunities across <strong>IT</strong>, <strong>Non-IT</strong>, and many other sectors.
      </p>

      <p>
        Whether you're a recent graduate stepping into the professional world
        or a seasoned professional looking for your next big move, JobHustle
        is your trusted partner in finding the perfect job.
      </p>

      <p>
        Our mission is to empower individuals by providing them with
        up-to-date and accurate job information, helping them make informed
        career decisions. At JobHustle, we believe in creating opportunities
        that lead to growth and success.
      </p>

      <p>
        What sets us apart? It's our dedication to providing personalized job
        recommendations, timely updates, and insightful career guidance.
      </p>

      <p>
        Join the JobHustle community and take the first step towards building
        your dream career. With us, every hustle brings you closer to success.
      </p>

      <p>
        <strong>Stay connected:</strong> Follow us on social media for the latest
        updates and tips to ace your job search.
      </p>

      <div className="team-section">
        <h3>Our Team:</h3>
        <div className="team-member">
          <img src="https://res.cloudinary.com/douxmncw2/image/upload/v1735834130/fonder_vlbl21.jpg" alt="Mahammad Atheek Shaik" className="team-image" />
          <p><strong>Mahammad Atheek Shaik</strong> – Founder</p>
        </div>
        <div className="team-member">
          <img src="https://res.cloudinary.com/douxmncw2/image/upload/v1735927541/irfan_tnqk3k.jpg" alt="Irfan Shaik" className="team-image" />
          <p><strong>Irfan Shaik</strong> – Content Writer</p>
        </div>
        <div className="team-member">
          <img src="https://res.cloudinary.com/douxmncw2/image/upload/v1735927744/nibba_r6mxsl.jpg" alt="Dillip Modi" className="team-image" />
          <p><strong>Dillip Modi</strong> – Content Writer</p>
        </div>
        <div className="team-member">
          <img src="https://res.cloudinary.com/douxmncw2/image/upload/v1735834358/riyaz1_qdhi38.jpg" alt="Riyaz Shaik" className="team-image" />
          <p><strong>Riyaz Shaik</strong> – Trainee Content Writer</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
