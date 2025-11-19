const express = require('express');
const topicsRouter = require('./routes/topics');

const app = express();
const PORT = process.env.PORT || 3000;

// Health check / root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Totle Topic Retrieval API is running.' });
});

// Topics endpoint
app.use('/api/topics', topicsRouter);

// Global error handler (fallback)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Something went wrong on the server.' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
