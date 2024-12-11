//Main code

import React, { useState, useEffect }  from 'react';
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
// import NotFound from './components/NotFound';
// import { Helmet } from 'react-helmet';
// import Welcome from './components/Welcome';

//<Route path="/job/:id" element={<JobNotification />} />
const App = () => {
    // State to track the current path
    const [isSitemapPage, setIsSitemapPage] = useState(false);

    // Effect to handle redirection if the path is /sitemap.xml
    useEffect(() => {
      if (window.location.pathname === '/sitemap.xml') {
        setIsSitemapPage(true);
      }
    }, []); // Empty dependency array ensures the effect runs only once on mount
  
    // If on /sitemap.xml, perform the redirection
    useEffect(() => {
      if (isSitemapPage) {
        window.location.href = 'https://api.jobhustles.com/sitemap.xml'; // Redirect to the full URL
      }
    }, [isSitemapPage]); // Trigger effect only when isSitemapPage changes

  return (
    <div className='bgcol'>
    <Router >

      <Navbar />
    {/* <div className="whatteli">
                <a href="https://whatsapp.com/channel/0029VajnMvaKWEKzCKLMt40P" target="_blank" rel="noopener noreferrer" className='what'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Facebook" className='whatimg' />
                </a>
                
                <a href="https://t.me/Jobs_hustle" target="_blank" rel="noopener noreferrer" className='teli'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Instagram" className='teliimg' />
                </a>
      </div> */}
      {/* <a  href="https://t.me/Jobs_hustle" target="_blank" rel="noopener noreferrer" className='teli' style={{ textDecoration: 'none' }}>
                   
                    <span style={{color:"red" , fontSize:'20px',fontWeight:"bold"}}>Join Here For Latest Job Updates</span>
                    
                </a> */}
      {/* <marquee className="whatteli">
  <a 
    href="https://t.me/Jobs_hustle" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="teli"
    style={{ 
      textDecoration: 'none', 
      display: 'flex', 
      alignItems: 'center', 
      gap: '8px' 
    }}
  >
    
    <span style={{ color: 'red', fontSize: '18px', fontWeight: 'bold' }} className='bujjikanna'>
      Join Here For Latest Job Updates
    </span>
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" 
      alt="Telegram" 
      className="teliimg"
      style={{ 
        width: '30pxx', 
        height: '30px', 
        objectFit: 'contain' 
      }} 
    />
  </a>
</marquee> */}

      
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
        {/* <Route component={NotFound} /> */}
        
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
