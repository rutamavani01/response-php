const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint to fetch videos
app.get('/api/videos', async (req, res) => {
    try {
        const categoryId = req.query.category_id || '33'; // Default to category_id=33 if not provided

        const response = await axios.get(`https://p9videos.com/master/api/v2/getvideos?category_id=${categoryId}`);
        res.json(response.data);

    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from the original API', details: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Proxy API is running on port ${PORT}`);
});
