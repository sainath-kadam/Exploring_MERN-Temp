// // app.js
// const express = require('express');
// const connectDB = require('./config/db');
// var cors = require('cors');
// // const router = express.Router();
// // routes
// // const books = require('./routes/api/books');

// const app = express();
// // const errorHandler = require('./Middlewares/errorHandler');
// // const dataRoutes = require('./Routes/dataRoutes');

// // Connect Database connect hora 
// connectDB();
 
// // cors &  Init Middleware use karte hai 
// app.use(cors({ origin: true, credentials: true }));
// app.use(express.json({ extended: false }));

// // use Routes
// // app.use('/api/data', dataRoutes);

// // Error handler middleware (should be the last middleware)
// // app.use(errorHandler);

// // niche wala must hai 
// const port = process.env.PORT || 8082;
// app.listen(port, () => console.log(`Server running on port ${port}`));

// config/db.js

// server.js (or app.js)
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

// Connect Database
connectDB();

// cors & Init Middleware
app.use(cors()); // You can specify allowed origins here if needed
app.use(express.json({ extended: false }));

// Add your routes here (e.g., dataRoutes)

// Error handler middleware (should be the last middleware)
// app.use(errorHandler);

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
