import React from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <header className="contact-us-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us anytime.</p>
      </header>

      <section className="contact-us-info-section">
        <h2>JobHustles Contact Information</h2>
        <p>
          <strong>Email:</strong> atheeks579@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +91 7981250043
        </p>
        <p>
          <strong>Website:</strong> jobhustles.com
        </p>
        {/* <p>
          <strong>Address:</strong> 123 JobHustle Lane, Career City, 56789
        </p> */}
      </section>

      <footer className="contact-us-footer">
        <p>
          Follow us on social media to stay updated on the latest job opportunities.
        </p>
      </footer>
    </div>
  );
};

export default ContactUs;
