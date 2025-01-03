import React, { useEffect } from "react";
import "./Welcomes.css"; // Ensure the CSS file is imported

const Welcome = () => {
    useEffect(() => {
        const textArray = ["Off Campus", "Internships", "Freshers","Experience",'JobByCity'];
        let index = 0;
        let charIndex = 0;
        let currentText = "";
        const typingSpeed = 150; // Typing speed in milliseconds
        const erasingSpeed = 100; // Erasing speed in milliseconds
        const pauseTime = 1000; // Pause time before erasing the text

        const jobTypeElement = document.querySelector(".job-type");

        function typeText() {
            if (charIndex < textArray[index].length) {
                currentText += textArray[index].charAt(charIndex);
                jobTypeElement.textContent = currentText;
                charIndex++;
                setTimeout(typeText, typingSpeed);
            } else {
                setTimeout(eraseText, pauseTime);
            }
        }

        function eraseText() {
            if (charIndex > 0) {
                currentText = currentText.slice(0, -1);
                jobTypeElement.textContent = currentText;
                charIndex--;
                setTimeout(eraseText, erasingSpeed);
            } else {
                index = (index + 1) % textArray.length; // Move to next word
                setTimeout(typeText, typingSpeed);
            }
        }

        typeText(); // Start typing the first word
    }, []);

    return (
        <div className="welcome-section">
            <div className="text-section">
                <h1 className="welcomeheading bashmash">Welcome to JobHustles</h1>
                <div className="equal">
                    <p className="normaltype">Get Job Like</p>
                    <div className="typing-container">
                        <p className="job-type"></p> {/* This will be updated dynamically */}
                    </div>
                </div>
                <p className="description">
                    {/* Searching for the perfect job has never been easier. 
                    At JobHustles, you can explore various job opportunities across multiple categories such as Off Campus, Internships, and Freshers. 
                    Simply browse through the available options, apply for the jobs that interest you, and take the first step toward building your career. 
                    It's fast, easy, and free! */}
                    Most Trusted leading Job site for Freshers and Experice who seek employment opportunities.
                    Latest Fresher Jobs, Experience Jobs and Internships etcs.
                </p>
            </div>
            {/* <div className="image-section">
                <img
                    src="https://image.slidesdocs.com/responsive-images/background/computer-screen-with-colorful-computer-lights-powerpoint-background_e8277ae137__960_540.jpg" // Replace with your actual image URL
                    alt="Job Search" 
                />
            </div> */}
        </div>
    );
};

export default Welcome;
