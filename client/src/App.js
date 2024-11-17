//Main code

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
//import JobNotification from './pages/JobNotification';
import OffCampus from './pages/OffCampus';
import Internships from './pages/Internships';
import Freshers from './pages/Freshers';
import Experience from './pages/Experience';
import JobByCity from './pages/JobByCity';  //fire and safty
import Support from './pages/Support';
import JobDetails from './pages/JobDetails';
import './App.css'; 
import { Helmet } from 'react-helmet';
// import Welcome from './components/Welcome';

//<Route path="/job/:id" element={<JobNotification />} />
const App = () => {
  return (
    <div className='bgcol'>
    <Router >
    <Helmet>
                <title>JobHustles - Best Job Opportunities for Freshers and Experienced</title>
                <meta name="description" content="Find the best job opportunities for freshers and experienced professionals at JobHustles. Explore career guidance, job notifications, internships, and more!.Lets Apply Jobs Through Jobhustles!." />
                <meta name="keywords" content="job opportunities,gunuine jobs,job posts,latest fresher jobs,trending jobs for freshers and experience,job notification,offcampous,explore jobs, freshers jobs, internships, career guidance, job search" />
                <meta property="og:title" content="JobHustles - Best Job Opportunities for Freshers ,Experienced and etc.." />
                <meta property="og:description" content="Discover a Latest job opportunities and internships at JobHustles. Get career guidance, job alerts, and apply today!" />
                <meta property="og:image" content="https://www.jobhustles.com/images/logo.png" />
                <meta property="og:url" content="https://www.jobhustles.com" />
                <meta property="og:type" content="website" />
                {/* <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="JobHustles - Best Job Opportunities for Freshers and Experienced" />
                <meta name="twitter:description" content="Find the latest job listings, internships, and career resources at JobHustles!" />
                <meta name="twitter:image" content="https://www.jobhustles.com/images/logo.png" /> */}
            </Helmet>
      <Navbar />
    <div className="whatteli">
                <a href="https://whatsapp.com/channel/0029VajnMvaKWEKzCKLMt40P" target="_blank" rel="noopener noreferrer" className='what'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Facebook" className='whatimg' />
                </a>
                
                <a href="https://t.me/Jobs_hustle" target="_blank" rel="noopener noreferrer" className='teli'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Instagram" className='teliimg' />
                </a>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/off-campus" element={<OffCampus />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/freshers" element={<Freshers />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/job-by-city/:city" element={<JobByCity />} />
        <Route path="/support" element={<Support />} />
        <Route path="/job/:id/details" element={<JobDetails />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
};



export default App;










/*

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css'; // Create this for global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes like Off-Campus, Internships, etc. *}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
*/
