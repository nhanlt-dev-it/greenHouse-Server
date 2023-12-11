const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');
const errorMiddleware = require('./middlewares/errorMiddleware');
const greenhouseRoutes = require('./routes/greenhouseRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDatabase();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use(greenhouseRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
