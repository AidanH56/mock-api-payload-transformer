// PURPOSE: For defining the main entry point

// Declare constants
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Default to port 3000 if not specified

// Middleware to parse JSON bodies
app.use(express.json());

// Use routes from route.js
app.use('/api', require('./routes'));

// Confirm the server is running
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});