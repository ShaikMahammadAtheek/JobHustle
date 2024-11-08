






//latest Code  Working --W
// this should work
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jobRoutes = require('./routes/jobRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const dotenv = require('dotenv'); 
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
// app.use(cors());

// app.use(cors({ origin: 'https://jobshustle.onrender.com' }));


app.use(cors({origin: process.env.CORS_ORIGIN}));


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
    const internshipJobs = await Job.find({ jobType: 'Internship' }).sort({ createdAt: -1 }).skip(skip).limit(limit);
    res.json(internshipJobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Internship jobs', error });
  }
});

// Route to fetch Fresher jobs (with pagination)
app.get('/api/freshers', async (req, res) => {
  const { limit, skip } = paginate(req);
  try {
    const fresherJobs = await Job.find({ jobType: 'Fresher' }).sort({ createdAt: -1 }).skip(skip).limit(limit);
    res.json(fresherJobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Fresher jobs', error });
  }
});

// Route to fetch Experience jobs (with pagination)
app.get('/api/experience', async (req, res) => {
  const { limit, skip } = paginate(req);
  try {
    const experienceJobs = await Job.find({ jobType: 'Experience' }).sort({ createdAt: -1 }).skip(skip).limit(limit);
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





// Server listening
app.listen(port, '0.0.0.0',() => {
  console.log(`Server is running on port: ${port}`);
});
