const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const router = express.Router();

const DATA_FILE = path.join(__dirname, '..', 'data', 'topics.json');

// GET /api/topics?search=<query>&sort=name
router.get('/', async (req, res) => {
  const { search, sort } = req.query;

  // Validate query
  if (!search || !search.trim()) {
    return res.status(400).json({
      error: 'Invalid query. Please provide a non-empty "search" query parameter.'
    });
  }

  const query = search.trim().toLowerCase();

  try {
    const fileContent = await fs.readFile(DATA_FILE, 'utf8');
    const topics = JSON.parse(fileContent);

    let filtered = Array.isArray(topics) ? topics.filter((topic) => {
      const nameMatch =
        typeof topic.name === 'string' &&
        topic.name.toLowerCase().includes(query);

      const categoryMatch =
        typeof topic.category === 'string' &&
        topic.category.toLowerCase().includes(query);

      // Match either name or category
      return nameMatch || categoryMatch;
    }) : [];

    if (sort === 'name') {
      filtered = filtered.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
      );
    }

    const response = filtered.map(({ id, name, category }) => ({
      id,
      name,
      category
    }));

    return res.status(200).json(response);
  } catch (err) {
    console.error('Error reading topics file:', err);
    return res.status(500).json({
      error: 'Server error while reading topics data.'
    });
  }
});

module.exports = router;
