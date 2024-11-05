/*
//Old Code
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/off-campus">Off Campus</Link></li>
                <li><Link to="/internships">Internships</Link></li>
                <li><Link to="/freshers">Freshers</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li>
                    <Link to="/job-by-city">Job By City</Link>
                    <ul>
                        <li><Link to="/job-by-city/new-york">Bagluru</Link></li>
                        <li><Link to="/job-by-city/san-francisco">Hydrabad</Link></li>
                        
                    </ul>
                </li>

                <li><Link to="/support">Support</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

*/



/*

//Main Code

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css'; // Make sure you have your styling

const Navbar = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    if (city) {
      navigate(`/job-by-city/${city}`); // Navigate to jobs by selected city
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/off-campus">Off Campus</Link></li>
        <li><Link to="/internships">Internships</Link></li>
        <li><Link to="/freshers">Freshers</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li>
          <select value={selectedCity} onChange={handleCityChange} className="city-select">
            <option value="">Job By City</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </li>
        <li><Link to="/support">Support</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

*/

/*
//latest to hover job by city

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Navbar.css'; // Ensure your styling is up to date

const Navbar = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownCities, setDropdownCities] = useState([]);
  const navigate = useNavigate();

  // Fetch cities once when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/cities') // Replace with your API endpoint
      .then(response => setDropdownCities(response.data))
      .catch(error => console.error('Error fetching cities:', error));
  }, []); // Empty dependency array to fetch cities only once

  const handleCityChange = (city) => {
    setSelectedCity(city);
    if (city) {
      navigate(`/job-by-city/${city}`); // Navigate to jobs by selected city
      setIsDropdownOpen(false); // Close dropdown after selection
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/off-campus">Off Campus</Link></li>
        <li><Link to="/internships">Internships</Link></li>
        <li><Link to="/freshers">Freshers</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li 
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span className="dropdown-toggle">
            {selectedCity || 'Job By City'}
          </span>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {dropdownCities.length > 0 ? (
                dropdownCities.map((city) => (
                  <a key={city} onClick={() => handleCityChange(city)} className="dropdown-item">
                    {city}
                  </a>
                ))
              ) : (
                <p>No cities available</p>
              )}
            </div>
          )}
        </li>
        <li><Link to="/support">Support</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


*/





/* Main code Macha ...... 12-09-2024*/
/*
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/jobhiring.jpg';
import '../styles/Navbar.css'; // Ensure your styling is up to date

const Navbar = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownCities, setDropdownCities] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the mobile menu
  const navigate = useNavigate();

  // Fetch cities when the dropdown is opened
  useEffect(() => {
    if (isDropdownOpen) {
      axios.get('http://localhost:5000/api/cities')
        .then(response => {
          const cleanCities = [...new Set(response.data.map(city => city.trim()))].sort();
          setDropdownCities(cleanCities);
        })
        .catch(error => console.error('Error fetching cities:', error));
    }
  }, [isDropdownOpen]);

  // Handle city change and navigation
  const handleCityChange = (city) => {
    setSelectedCity(city);
    if (city) {
      navigate(`/job-by-city/${city}`);
      setIsDropdownOpen(false); // Close the dropdown after selection
    }
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        
        {isMenuOpen ? (
          <span className="close-btn">&times;</span>
        ) : (
          <>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </>
        )}
      </div>

      <div id="navlogo">
        <img src={logo} alt="NavBarLogo" />
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/off-campus" >Off Campus</Link></li>
        <li><Link to="/internships" >Internships</Link></li>
        <li><Link to="/freshers" >Freshers</Link></li>
        <li><Link to="/experience" >Experience</Link></li>
        <li
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span className="dropdown-toggle">
            {selectedCity || 'Job By City'}
          </span>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {dropdownCities.length > 0 ? (
                dropdownCities.map((city) => (
                  <button
                    key={city}
                    onClick={() => handleCityChange(city)} // Handle city selection
                    className="dropdown-item"
                  >
                    {city}
                  </button>
                ))
              ) : (
                <p>No cities available</p>
              )}
            </div>
          )}
        </li>
        <li><Link to="/support" >Support</Link></li>
      </ul>

      
      <div className="navbar-enquiry">
        <button className="enquiry-button">Send Enquiry →</button>
      </div>
    </nav>
  );
};

export default Navbar;

*/













































import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Navbars.css';

const Navbar = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownCities, setDropdownCities] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  // Fetch cities when the dropdown is opened
  useEffect(() => {
    if (isDropdownOpen) {
      axios.get(`${process.env.REACT_APP_API_URL}/cities`)
        .then(response => {
          const cleanCities = [...new Set(response.data.map(city => city.trim()))].sort();
          setDropdownCities(cleanCities);
        })
        .catch(error => console.error('Error fetching cities:', error));
    }
  }, [isDropdownOpen]);

  // Handle city change and navigation
  const handleCityChange = (city) => {
    setSelectedCity(city);
    if (city) {
      navigate(`/job-by-city/${city}`);
      setIsDropdownOpen(false); // Close the dropdown after selection
    }
  };

  // Update the document title based on the current path
  useEffect(() => {
    let title = 'JobsHustles'; // Default title

    switch (location.pathname) {
      case '/off-campus':
        title = 'Off Campus Latest Jobs For Freshers and Experience Persons | Apply Jobs';
        break;
      case '/internships':
        title = 'Internships Latest Opportunities For Freshers | Apply Jobs';
        break;
      case '/freshers':
        title = 'Fresher Latest Jobs For Freshers Persons | Apply Jobs';
        break;
      case '/experience':
        title = 'Experience Latest Jobs For Experience Persons | Apply Jobs';
        break;
      case '/support':
        title = 'Send Your Query';
        break;
      case `/job-by-city/${selectedCity}`:
        title = `Latest ${selectedCity} Jobs For Freshers and Experience Persons | Apply Jobs`;
        break;
      default:
        break;
    }

    document.title = title;
  }, [location.pathname, selectedCity]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <i className="footer-name"><Link to="/">JobHustle</Link></i>
      </div>

      <div>
        <ul className="navbar-menu-desktop">
          <li className={isActive('/') ? 'active' : ''}><Link to="/">Home</Link></li>
          <li className={isActive('/off-campus') ? 'active' : ''}><Link to="/off-campus">Off Campus</Link></li>
          <li className={isActive('/internships') ? 'active' : ''}><Link to="/internships">Internships</Link></li>
          <li className={isActive('/freshers') ? 'active' : ''}><Link to="/freshers">Freshers</Link></li>
          <li className={isActive('/experience') ? 'active' : ''}><Link to="/experience">Experience</Link></li>
          <li className="dropdown" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <span className="dropdown-toggle">{'Job By City'}</span>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {dropdownCities.length > 0 ? (
                  dropdownCities.map((city) => (
                    <button key={city} onClick={() => handleCityChange(city)} className="dropdown-item">
                      {city}
                    </button>
                  ))
                ) : (
                  <p>No cities available</p>
                )}
              </div>
            )}
          </li>
          <li className={isActive('/support') ? 'active' : ''}><Link to="/support">Support</Link></li>
        </ul>
      </div>

      <div className={`navbar-enquiry ${isMobileMenuOpen ? 'hide-enquiry' : ''}`}>
        <Link to="/support"><button className="enquiry-button sizeofbutton">Send Query →</button></Link>
      </div>

      <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`navbar-menu-container ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-menu">
          <div className="navbar-menu-header">
            <div className="navbar-logo">JobHiring</div>
            <div className="navbar-menu-close" onClick={() => setIsMobileMenuOpen(false)}>×</div>
          </div>
          <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <li className={isActive('/') ? 'active' : ''}><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li className={isActive('/off-campus') ? 'active' : ''}><Link to="/off-campus" onClick={() => setIsMobileMenuOpen(false)}>Off Campus</Link></li>
            <li className={isActive('/internships') ? 'active' : ''}><Link to="/internships" onClick={() => setIsMobileMenuOpen(false)}>Internships</Link></li>
            <li className={isActive('/freshers') ? 'active' : ''}><Link to="/freshers" onClick={() => setIsMobileMenuOpen(false)}>Freshers</Link></li>
            <li className={isActive('/experience') ? 'active' : ''}><Link to="/experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</Link></li>
            <li className="dropdown" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
              <span className="dropdown-toggle">{'Job By City'}</span>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {dropdownCities.length > 0 ? (
                    dropdownCities.map((city) => (
                      <button key={city} onClick={() => handleCityChange(city)} className="dropdown-item">
                        {city}
                      </button>
                    ))
                  ) : (
                    <p>No cities available</p>
                  )}
                </div>
              )}
            </li>
            <li><Link to="/support" onClick={() => setIsMobileMenuOpen(false)}>Support</Link></li>
            <li>
              <Link to="/support"><button className="enquiry-button sizeofbutton" onClick={() => setIsMobileMenuOpen(false)}>Send Query →</button></Link>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;





/*

import React, { useState, useEffect } from 'react';
import { Link, useNavigate ,useLocation} from 'react-router-dom';
import axios from 'axios';
//import '../styles/Navbar.css'; // Ensure your styling is up to date
import './Navbars.css';

const Navbar = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownCities, setDropdownCities] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the mobile menu

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  const navigate = useNavigate();


  const location = useLocation();
  const isActive = (path) => location.pathname === path;


  // Fetch cities when the dropdown is opened
  useEffect(() => {
    if (isDropdownOpen) {
      axios.get(`${process.env.REACT_APP_API_URL}/cities`)
        .then(response => {
          const cleanCities = [...new Set(response.data.map(city => city.trim()))].sort();
          setDropdownCities(cleanCities);
        })
        .catch(error => console.error('Error fetching cities:', error));
    }
  }, [isDropdownOpen]);

  // Handle city change and navigation
  const handleCityChange = (city) => {
    setSelectedCity(city);
    if (city) {
      navigate(`/job-by-city/${city}`);
      setIsDropdownOpen(false); // Close the dropdown after selection
    }
  };



  return (
    <nav className="navbar">
      

      <div className="navbar-logo">
        <span>JobsHustles</span>
      </div>

      <div>
        <ul className="navbar-menu-desktop">
          <li className={isActive('/') ? 'active' : ''}><Link to="/" >Home</Link></li>
          <li className={isActive('/off-campus') ? 'active' : ''}><Link to="/off-campus" >Off Campus</Link></li>
          <li className={isActive('/internships') ? 'active' : ''}><Link to="/internships" >Internships</Link></li>
          <li  className={isActive('/freshers') ? 'active' : ''}><Link to="/freshers" >Freshers</Link></li>
          <li className={isActive('/experience') ? 'active' : ''}><Link to="/experience" >Experience</Link></li>
          <li
            className="dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="dropdown-toggle">
              
               {'Job By City'}
            </span>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {dropdownCities.length > 0 ? (
                  dropdownCities.map((city) => (
                    <button
                      key={city}
                      onClick={() => handleCityChange(city)} // Handle city selection
                      className="dropdown-item"
                    >
                      {city}
                    </button>
                  ))
                ) : (
                  <p>No {selectedCity}cities available</p>
                )}
              </div>
            )}
          </li>
          <li className={isActive('/support') ? 'active' : ''}><Link to="/support" >Support</Link></li>
        </ul>
      </div>

      <div className={`navbar-enquiry  ${isMenuOpen ? 'hide-enquiry' : ''}`}>
<Link to="/support" ><button className="enquiry-button sizeofbutton " >Send Query →</button></Link>

        
      </div>

      

      <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`navbar-menu-container ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-menu">
          <div className="navbar-menu-header">
            <div className="navbar-logo">JobHiring</div>
            <div className="navbar-menu-close" onClick={toggleMobileMenu}>×</div>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li className={isActive('/') ? 'active' : ''}><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
            <li className={isActive('/off-campus') ? 'active' : ''}><Link to="/off-campus" onClick={toggleMobileMenu}>Off Campus</Link></li>
            <li className={isActive('/internships') ? 'active' : ''}><Link to="/internships" onClick={toggleMobileMenu}>Internships</Link></li>
            <li className={isActive('/freshers') ? 'active' : ''}><Link to="/freshers" onClick={toggleMobileMenu}>Freshers</Link></li>
            <li className={isActive('/experience') ? 'active' : ''}><Link to="/experience" onClick={toggleMobileMenu}>Experience</Link></li>
            <li
              className="dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <span className="dropdown-toggle">
               
                {'Job By City'}
              </span>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {dropdownCities.length > 0 ? (
                    dropdownCities.map((city) => (
                      <button
                        key={city}
                        onClick={() => handleCityChange(city)} // Handle city selection
                        className="dropdown-item"
                      >
                        {city}
                      </button>
                    ))
                  ) : (
                    <p>No cities available</p>
                  )}
                </div>
              )}
            </li>
            <li><Link to="/support" onClick={toggleMobileMenu}>Support</Link></li>
            <li>
                <Link to="/support" ><button className="enquiry-button sizeofbutton "onClick={toggleMobileMenu} >Send Query →</button></Link>

            </li>
          </ul>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;

*/



/*............... this have to apply on my code *......................./
/*

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>f1studioz</span>
      </div>


      <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>


      <div className={`navbar-menu-container ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-menu">
          <div className="navbar-menu-header">
            <div className="navbar-logo">f1studioz</div>
            <div className="navbar-menu-close" onClick={toggleMobileMenu}>×</div>
          </div>
          <li><a href="#services" onClick={toggleMobileMenu}>Services</a></li>
          <li><a href="#work" onClick={toggleMobileMenu}>Work</a></li>
          <li className="dropdown">
            <a href="#industries" onClick={toggleMobileMenu}>Industries</a>
            <ul className="dropdown-content">
              <li><a href="#industry1" onClick={toggleMobileMenu}>Industry 1</a></li>
              <li><a href="#industry2" onClick={toggleMobileMenu}>Industry 2</a></li>
            </ul>
          </li>
          <li><a href="#careers" onClick={toggleMobileMenu}>Careers</a></li>
          <li><a href="#about" onClick={toggleMobileMenu}>About us</a></li>
          <li className="dropdown">
            <a href="#resources" onClick={toggleMobileMenu}>Resources</a>
            <ul className="dropdown-content">
              <li><a href="#resource1" onClick={toggleMobileMenu}>Resource 1</a></li>
              <li><a href="#resource2" onClick={toggleMobileMenu}>Resource 2</a></li>
            </ul>
          </li>
          <li>
            <button className="enquiry-button mobile-enquiry">Send Enquiry →</button>
          </li>
        </ul>
      </div>


      <div className="navbar-enquiry">
        <button className="enquiry-button">Send Enquiry →</button>
      </div>
    </nav>
  );
};

export default Navbar;


*/





//Copied Data

//Old Code
/*import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/off-campus">Off Campus</Link></li>
                <li><Link to="/internships">Internships</Link></li>
                <li><Link to="/freshers">Freshers</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li>
                    <Link to="/job-by-city">Job By City</Link>
                    <ul>
                        <li><Link to="/job-by-city/new-york">Bagluru</Link></li>
                        <li><Link to="/job-by-city/san-francisco">Hydrabad</Link></li>

                    </ul>
                </li>

                <li><Link to="/support">Support</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

*/

/*
//Main Code

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css'; // Make sure you have your styling

const Navbar = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    if (city) {
      navigate(`/job-by-city/${city}`); // Navigate to jobs by selected city
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/off-campus">Off Campus</Link></li>
        <li><Link to="/internships">Internships</Link></li>
        <li><Link to="/freshers">Freshers</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li>
          <select value={selectedCity} onChange={handleCityChange} className="city-select">
            <option value="">Job By City</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </li>
        <li><Link to="/support">Support</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


*/
//New code

/*
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Navbar.css'; // Ensure your styling is up to date

const Navbar = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownCities, setDropdownCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isDropdownOpen) {
      axios.get('http://localhost:5000//api/jobs/city/:city') // Replace with your API endpoint
        .then(response => setDropdownCities(response.data))
        .catch(error => console.error('Error fetching cities:', error));
    }
  }, [isDropdownOpen]);

  const handleCityChange = (city) => {
    setSelectedCity(city);
    if (city) {
      navigate(`/job-by-city/${city}`); // Navigate to jobs by selected city
      setIsDropdownOpen(false); // Close dropdown after selection
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/off-campus">Off Campus</Link></li>
        <li><Link to="/internships">Internships</Link></li>
        <li><Link to="/freshers">Freshers</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li className="dropdown">
          <span
            className="dropdown-toggle"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            {selectedCity || 'Job By City'}
          </span>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {dropdownCities.length > 0 ? (
                dropdownCities.map((city) => (
                  <a key={city} onClick={() => handleCityChange(city)} className="dropdown-item">
                    {city}
                  </a>
                ))
              ) : (
                <p>No cities available</p>
              )}
            </div>
          )}
        </li>
        <li><Link to="/support">Support</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

*/







/*



import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Create this file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Job Portal</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/off-campus">Off Campus</Link></li>
        <li><Link to="/internships">Internships</Link></li>
        <li><Link to="/freshers">Freshers</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">Job By City</button>
            <div className="dropdown-content">
              <Link to="/city/bangalore">Bangalore</Link>
              <Link to="/city/hyderabad">Hyderabad</Link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


*/






/*

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Create this file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Job Portal</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/off-campus">Off Campus</Link></li>
        <li><Link to="/internships">Internships</Link></li>
        <li><Link to="/freshers">Freshers</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">Job By City</button>
            <div className="dropdown-content">
              <Link to="/city/bangalore">Bangalore</Link>
              <Link to="/city/hyderabad">Hyderabad</Link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


*/
