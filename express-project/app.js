const express = require('express');

const app = express();

// Create a route
app.get('/', (req, res) => {
    res.send('Welcome to Express.js! /n i am a sanchita!!!!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});