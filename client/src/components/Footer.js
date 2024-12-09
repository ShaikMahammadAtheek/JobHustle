import React from 'react';
import '../styles/Footer.css';
const Footer = () => {
    return (
        <footer>
            <div className="footer-logo">
        { /* <div className="logo"></div>
         <div className="logo"></div>
                 <div ><img src={top} alt="" className="logos" /></div>
                 */}
                <i className="footer-name">JobHustle</i>
            </div>
            {/* <div className="footer-links">
                <a href="https://whatsapp.com/channel/0029VajnMvaKWEKzCKLMt40P" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WHATSAPP" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://t3.ftcdn.net/jpg/06/97/27/76/240_F_697277665_7RCNAHR7fGbVfL9wRzqSEWMd7RSuCDYj.jpg" alt="YouTube" />
                </a>
                <a href="https://t.me/Jobs_hustle" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="X (formerly Twitter)" />
                </a>
            </div> */}
            <div className="footer-about">
                <i>About us</i>
                <br />
                <br />
                <i>Job site for Freshers and Experice who are looking for job opportunities. Latest Fresher Jobs, Experience Jobs and Internships etcs.</i>
            </div>
            <br />
            <div className="footer-copyright">
                <i>Copyright © JobHustles. All rights reserved.</i> 
            </div>
        </footer>
    );
};

export default Footer;











/*
import React from 'react';
import './Footer.css';  // Create this file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-circle">Logo</div>
        <h3>Website Name</h3>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank">Facebook</a>
          <a href="https://instagram.com" target="_blank">Instagram</a>
          <a href="https://youtube.com" target="_blank">YouTube</a>
        </div>
        <p>Copyright © Mahammad Atheek Shaik. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
*/
