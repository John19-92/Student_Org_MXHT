const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const Media = require('../models/Media');
const upload = require('../middleware/upload');

// Upload media
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const { title, description, type, category } = req.body;

    const media = new Media({
      title: title || req.file.originalname,
      description: description || '',
      type: type || (req.file.mimetype.startsWith('video') ? 'video' : 'image'),
      filename: req.file.filename,
      path: `/uploads/${req.file.filename}`,
      category: category || 'other'
    });

    await media.save();
    res.status(201).json({ success: true, data: media });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all media
router.get('/', async (req, res) => {
  try {
    const { type, category } = req.query;
    const filter = {};
    if (type) filter.type = type;
    if (category) filter.category = category;

    const media = await Media.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: media.length, data: media });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get single media
router.get('/:id', async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    if (!media) return res.status(404).json({ message: 'Media not found' });
    res.json({ success: true, data: media });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete media
router.delete('/:id', async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    if (!media) return res.status(404).json({ message: 'Media not found' });

    // Remove file from disk if it's a local upload
    if (media.filename) {
      const filePath = path.join(__dirname, '..', 'uploads', media.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await media.deleteOne();
    res.json({ success: true, message: 'Media deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
