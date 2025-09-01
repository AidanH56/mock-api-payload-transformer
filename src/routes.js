// PURPOSE: For defining the API endpoints

const express = require('express');
const router = express.Router();
const converter = require('./converter')

// Route for converting JSON payloads
router.post('/convert', (req, res) => {
    try {
        const jsonInputData = req.body;
        const convertedData = converter.convert(jsonInputData);
        res.json({ message: 'Conversion successful', data: convertedData });
    } catch (error) {
        console.error('Error during conversion:', error);
        res.status(500).json({ message: 'Conversion failed', error: error.message });
    }
});

module.exports = router;