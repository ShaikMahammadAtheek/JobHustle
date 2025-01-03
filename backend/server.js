






//latest Code  Working --W
// this should work
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { SitemapStream, streamToPromise } = require('sitemap');
const jobRoutes = require('./routes/jobRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const dotenv = require('dotenv'); 
// const { SitemapStream, streamToPromise } = require('sitemap');
const app = express();
const port = process.env.PORT || 5000;



// Load environment variables from .env file
dotenv.config();

// MongoDB connection with connection pooling
// const uri = 'mongodb+srv://mahammadatheek17:64CD3iWJIUMED24C@cluster0.rdkhg.mongodb.net/jobportal';
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { 
  // useNewUrlParser: true, 
  // useUnifiedTopology: true, 
  maxPoolSize: 10  // Use 'maxPoolSize' instead of 'poolSize'
});


const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});


// // Middleware
app.use(cors());

// app.use(cors({ origin: 'https://jobshustle.onrender.com' }));


// app.use(cors({origin: process.env.CORS_ORIGIN}));


// Allow CORS for specific origins (you can update the array of allowed origins as needed)
// Define the allowed origins
// const publickey=process.env.ELASTIC_PUBLIC_KEY;
// const allowedOrigins = [
//   'https://jobhustles.com',
//   'https://www.jobhustles.com',
//   'http://localhost:3000',
//   `http://${publickey}:3000` ,
// ];
// app.use(cors({
//   origin: allowedOrigins,
//   optionsSuccessStatus: 200 
// }));


app.use(express.json());
app.use(bodyParser.json());


// Import the Job model
const Job = require('./models/job.model');


// Import routers
const notificationsRouter = require('./routes/notifications');
const jobsRouter = require('./routes/jobs');

// Middleware for MongoDB query performance
Job.createIndexes({ jobType: 1, location: 1, createdAt: -1 });  // Create necessary indexes

// Utility function for pagination
const paginate = (req) => {
  const limit = parseInt(req.query.limit) || 10;  // Default limit: 10
  const page = parseInt(req.query.page) || 1;     // Default page: 1
  return { limit, skip: (page - 1) * limit };
};


// Route to fetch all jobs (with pagination) and display the newest ones first (for Home page)
app.get('/api/home', async (req, res) => {
  const { limit, skip } = paginate(req);
  try {
    const jobs = await Job.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});




// Route to fetch job details by ID
app.get('/api/home/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).send({ message: 'Job not found' });
    }
    res.send(job);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching job details' });
  }
});

// Route to fetch Off Campus jobs (with pagination)
app.get('/api/offcampus', async (req, res) => {
  const { limit, skip } = paginate(req);
  try {
    const offCampusJobs = await Job.find({ jobType: 'OffCampus' }).sort({ createdAt: -1 }).skip(skip).limit(limit);
    res.json(offCampusJobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching OffCampus jobs', error });
  }
});

// Route to fetch Internship jobs (with pagination)
app.get('/api/internships', async (req, res) => {
  const { limit, skip } = paginate(req);
  try {
    const internshipJobs = await Job.find({ jobLocationType: 'Internship' }).sort({ createdAt: -1 }).skip(skip).limit(limit);
    res.json(internshipJobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Internship jobs', error });
  }
});

// Route to fetch Fresher jobs (with pagination)
app.get('/api/freshers', async (req, res) => {
  const { limit, skip } = paginate(req);
  try {
    const fresherJobs = await Job.find({ jobLocationType: 'Freshers' }).sort({ createdAt: -1 }).skip(skip).limit(limit);
    res.json(fresherJobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Fresher jobs', error });
  }
});

// Route to fetch Experience jobs (with pagination)
app.get('/api/experience', async (req, res) => {
  const { limit, skip } = paginate(req);
  try {
    const experienceJobs = await Job.find({ jobLocationType: 'Experience' }).sort({ createdAt: -1 }).skip(skip).limit(limit);
    res.json(experienceJobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Experience jobs', error });
  }
});

// Route to get distinct cities
app.get('/api/cities', async (req, res) => {
  try {
    const cities = await Job.find().distinct('location');  // Fetch unique city names
    res.json(cities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to get jobs by city (with pagination)
// app.get('/api/job-by-city/:city', async (req, res) => {
//   const { limit, skip } = paginate(req);
//   try {
//     const city = req.params.city;
//     const jobs = await Job.find({ location: city }).sort({ createdAt: -1 }).skip(skip).limit(limit);
//     res.json(jobs);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching jobs by city' });
//   }
// });

// Route to get jobs by city
app.get('/api/job-by-city/:city', async (req, res) => {
    try {
      const city = req.params.city;
      const jobs = await Job.find({ location: city }).sort({ createdAt: -1 });
      res.json(jobs);
    } catch (err) {
      console.error('Error fetching jobs by city:', err);
      res.status(500).json({ message: 'Server error' });
    }
  });



// Feedback routes
app.use('/api/feedback', feedbackRoutes);
// Use the routers


// Route for feedback submission (POST)
// app.post('/api/feedback', async (req, res) => {
//   try {
//     const { name, email, feedback } = req.body;
//     // Email validation logic can be added here
//     const isEmailValid = true;  // Assume the email is valid for this example
//     if (!isEmailValid) {
//       return res.status(400).json({ message: 'Invalid email address' });
//     }

//     // Feedback model logic goes here (save feedback to the database)
//     res.status(200).json({ message: 'Feedback submitted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error submitting feedback', error });
//   }
// });

// // Route for notifications (GET)
// app.get('/api/notifications', async (req, res) => {
//   try {
//     const notifications = [];  // Fetch your notifications data from the database here
//     res.json(notifications);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching notifications', error });
//   }
// });







// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('frontend/build'));

//   // Catch-all route to send the React app on any non-API route
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//   });
// }

// // 404 handler for any undefined routes
// app.use((req, res) => {
//   res.status(404).json({ error: 'Page not found' });
// });







// // Sitemap route for backend (dynamic sitemap generation)
// app.get('/sitemap.xml', async (req, res) => {
//   try {
//     // Set the hostname to your site URL (e.g., 'http://localhost:5000' for local, 'https://jobhustles.com' for production)
//     const hostname = 'http://localhost:3000'; // Change this to your production hostname for deployment

//     const jobs = await Job.find().select('_id createdAt');
//     const jobUrls = jobs.map(job => {
//       return {
//         url: `${hostname}/api/home/${job._id}`, // Full clickable URL
//         lastModified: job.createdAt.toISOString() // Convert 'createdAt' to ISO string
//       };
//     });

//     // Add static URLs
//     const staticUrls = [
//       { url: `${hostname}/`, lastModified: new Date().toISOString() },
//       { url: `${hostname}/off-campus`, lastModified: new Date().toISOString() },
//       { url: `${hostname}/internships`, lastModified: new Date().toISOString() },
//       { url: `${hostname}/freshers`, lastModified: new Date().toISOString() },
//       { url: `${hostname}/experience`, lastModified: new Date().toISOString() },
//       { url: `${hostname}/job-by-city/:city`, lastModified: new Date().toISOString() },
//       { url: `${hostname}/support`, lastModified: new Date().toISOString() }
//     ];

//     // Combine static and dynamic URLs
//     const allUrls = [...staticUrls, ...jobUrls];

//     // Generate an HTML response with clickable URLs
//     let htmlContent = `
//       <html>
//         <head>
//           <title>XML Sitemap</title>
//         </head>
//         <body>
//           <h1>XML Sitemap</h1>
//           <p>Generated for development/testing. This is an XML Sitemap meant for consumption by search engines.</p>
//           <table border="1">
//             <thead>
//               <tr>
//                 <th>Sitemap</th>
//                 <th>Last Modified</th>
//               </tr>
//             </thead>
//             <tbody>
//     `;

//     // Add the URLs in a clickable format
//     allUrls.forEach(urlInfo => {
//       htmlContent += `
//         <tr>
//           <td><a href="${urlInfo.url}" target="_blank">${urlInfo.url}</a></td>
//           <td>${new Date(urlInfo.lastModified).toLocaleString()}</td>
//         </tr>
//       `;
//     });

//     htmlContent += `
//             </tbody>
//           </table>
//         </body>
//       </html>
//     `;

//     res.header('Content-Type', 'text/html');
//     res.send(htmlContent);
//   } catch (err) {
//     console.error('Error generating sitemap:', err);
//     res.status(500).send({ error: 'Failed to generate sitemap' });
//   }
// });




// Sitemap route for backend (dynamic sitemap generation)
// app.get('/sitemap.xml', async (req, res) => {
//   try {
//     // Header for HTML content
//     res.header('Content-Type', 'text/html');

//     // Start the Sitemap Index HTML content
//     let sitemapIndex = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>XML Sitemap Index</title>
//   <style>
//     body {
//       font-family: Arial, sans-serif;
//       line-height: 1.6;
//       margin: 20px;
//       padding: 0;
//       background-color: #f9f9f9;
//     }
//     h1 {
//       color: #333;
//     }
//     table {
//       width: 100%;
//       border-collapse: collapse;
//       margin-top: 20px;
//     }
//     table, th, td {
//       border: 1px solid #ddd;
//     }
//     th, td {
//       padding: 8px;
//       text-align: left;
//     }
//     th {
//       background-color: #f2f2f2;
//     }
//     a {
//       color: #0066cc;
//       text-decoration: none;
//     }
//     a:hover {
//       text-decoration: underline;
//     }
//   </style>
// </head>
// <body>

//   <h1>XML Sitemap</h1>
//   <p>Generated by Yoast SEO, this is an XML Sitemap, meant for consumption by search engines.</p>
//   <p>You can find more information about XML sitemaps on <a href="https://www.sitemaps.org">sitemaps.org</a>.</p>

//   <h2>This XML Sitemap Index file contains 9 sitemaps:</h2>

//   <table>
//     <thead>
//       <tr>
//         <th>Sitemap</th>
//         <th>Last Modified</th>
//       </tr>
//     </thead>
//     <tbody>
//     `;

//     const jobs = await Job.find().select('_id createdAt');
//     // Sitemaps with last modified dates (for demonstration, use your actual URLs and dates)
//     const sitemaps = [
//       { url: 'http://localhost:3000/', lastModified: '2024-12-10 13:05 +00:00' },
//       { url: 'http://localhost:3000/off-campus', lastModified: '2024-12-10 13:05 +00:00' },
//       { url: 'http://localhost:3000/internships', lastModified: '2024-12-10 13:05 +00:00' },
//       { url: 'http://localhost:3000/freshers', lastModified: '2024-12-10 13:05 +00:00' },
//       { url: 'http://localhost:3000/experience', lastModified: '2024-12-10 13:05 +00:00' },
//       { url: 'http://localhost:3000/cities', lastModified: '2024-12-10 13:05 +00:00' },
//       { url: 'http://localhost:3000/job-by-city/:city', lastModified: '2024-12-10 13:05 +00:00' },
//       { url: 'http://localhost:3000/support', lastModified: '2024-12-10 13:05 +00:00' }
//       { url: `http://localhost:3000/${job._id}`, lastModified: '2024-12-10 13:05 +00:00' }
//     ];

//     // Loop through sitemaps and append to sitemapIndex HTML content
//     sitemaps.forEach(sitemap => {
//       sitemapIndex += `
//       <tr>
//         <td><a href="${sitemap.url}" target="_blank">${sitemap.url}</a></td>
//         <td>${sitemap.lastModified}</td>
//       </tr>
//       `;
//     });

//     // Closing the HTML structure
//     sitemapIndex += `
//     </tbody>
//   </table>

// </body>
// </html>
// `;

//     // Send the HTML formatted sitemap index as the response
//     res.send(sitemapIndex);
//   } catch (err) {
//     console.error('Error generating sitemap index:', err);
//     res.status(500).send({ error: 'Failed to generate sitemap index' });
//   }
// });








// app.get('/sitemap.xml', async (req, res) => {
//   try {
//     // Set the hostname to your site URL (e.g., 'http://localhost:5000' for local, 'https://jobhustles.com' for production)
//     const hostname = 'https://jobhustles.com'; // Change this to your production hostname for deployment

//     // Fetch distinct cities from the database
//     const cities = await Job.distinct('location');
    
//     // Fetch jobs data to get job URLs
//     const jobs = await Job.find().select('_id createdAt location');
    
//     // Create URLs for each city
//     const cityUrls = cities.map(city => ({
//       url: `${hostname}/job-by-city/${city}`,
//       lastModified: new Date().toISOString(), // You can adjust this depending on when the city was last modified or updated
//     }));

//     // Create URLs for individual job pages
//     const jobUrls = jobs.map(job => ({
//       url: `${hostname}/job/${job._id}`,
//       lastModified: job.createdAt.toISOString(), // Convert 'createdAt' to ISO string
//     }));

//     // Static URLs (like homepage and other important pages)
//     const staticUrls = [
//       { url: `${hostname}/`, lastModified: new Date().toISOString() },
//       { url: `${hostname}/off-campus`, lastModified: new Date().toISOString() },
//       { url: `${hostname}/internships`, lastModified: new Date().toISOString() },
//       { url: `${hostname}/freshers`, lastModified: new Date().toISOString() },
//       { url: `${hostname}/experience`, lastModified: new Date().toISOString() },
//       { url: `${hostname}/cities`, lastModified: new Date().toISOString() }
//     ];

//     // Combine static URLs, job URLs, and city URLs
//     const allUrls = [...staticUrls, ...jobUrls, ...cityUrls];

//     // Generate an HTML response with clickable URLs
//     let htmlContent = `
//       <html>
//         <head>
//           <title>XML Sitemap</title>
//         </head>
//         <body>
//           <h1>XML Sitemap</h1>
//           <p>Generated for development/testing. This is an XML Sitemap meant for consumption by search engines.</p>
//           <table border="1">
//             <thead>
//               <tr>
//                 <th>Sitemap</th>
//                 <th>Last Modified</th>
//               </tr>
//             </thead>
//             <tbody>
//     `;

//     // Add the URLs in a clickable format
//     allUrls.forEach(urlInfo => {
//       htmlContent += `
//         <tr>
//           <td><a href="${urlInfo.url}" target="_blank">${urlInfo.url}</a></td>
//           <td>${new Date(urlInfo.lastModified).toLocaleString()}</td>
//         </tr>
//       `;
//     });

//     htmlContent += `
//             </tbody>
//           </table>
//         </body>
//       </html>
//     `;

//     res.header('Content-Type', 'text/html');
//     res.send(htmlContent);
//   } catch (err) {
//     console.error('Error generating sitemap:', err);
//     res.status(500).send({ error: 'Failed to generate sitemap' });
//   }
// });








app.get('/sitemap.xml', async (req, res) => {
  try {
    // Set the hostname to your site URL (e.g., 'http://localhost:5000' for local, 'https://jobhustles.com' for production)
    const hostname = 'https://jobhustles.com'; // Change this to your production hostname for deployment

    // Fetch distinct cities from the database
    const cities = await Job.distinct('location');
    
    // Fetch jobs data to get job URLs
    const jobs = await Job.find().select('_id createdAt location');
    
    // Create URLs for each city
    // const cityUrls = cities.map(city => ({
    //   loc: `${hostname}/job-by-city/${city}`,
    //   lastmod: new Date().toISOString(),
    //   changefreq: 'daily',  // You can adjust this depending on the update frequency of cities
    //   priority: 0.7,        // Set an appropriate priority for these URLs
    // }));

    // Create URLs for individual job pages
    const jobUrls = jobs.map(job => ({
      loc: `${hostname}/job/${job._id}`,
      lastmod: job.createdAt.toISOString(), // Convert 'createdAt' to ISO string
      changefreq: 'weekly',
      priority: 0.8,
    }));

    // Static URLs (like homepage and other important pages)
    const staticUrls = [
      { loc: `${hostname}/`, lastmod: new Date().toISOString(), changefreq: 'daily', priority: 1.0 },
      { loc: `${hostname}/off-campus`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
      { loc: `${hostname}/internships`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
      { loc: `${hostname}/freshers`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
      { loc: `${hostname}/experience`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
      // { loc: `${hostname}/cities`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.6 },
    ];

    // Combine static URLs, job URLs, and city URLs
    const allUrls = [...staticUrls, ...jobUrls];

    // Generate the XML Sitemap format
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Add all URLs to the sitemap
    allUrls.forEach(urlInfo => {
      sitemap += `
      <url>
        <loc>${urlInfo.loc}</loc>
        <lastmod>${urlInfo.lastmod}</lastmod>
        <changefreq>${urlInfo.changefreq}</changefreq>
        <priority>${urlInfo.priority}</priority>
      </url>\n`;
    });

    sitemap += `</urlset>\n`;

    // Set the response header to XML
    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  } catch (err) {
    console.error('Error generating sitemap:', err);
    res.status(500).send({ error: 'Failed to generate sitemap' });
  }
});


// Server listening
app.listen(port, '0.0.0.0',() => {
  console.log(`Server is running on port: ${port}`);
});
