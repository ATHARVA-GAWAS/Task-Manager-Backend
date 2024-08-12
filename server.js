require('dotenv').config();
const express = require('express');
const app = express();
const { dbConnection } = require('./config/db');
const taskRoutes = require('./routes/tasks');
const userRoutes = require('./routes/users');

// Connect to MongoDB
dbConnection();

// Middleware
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
