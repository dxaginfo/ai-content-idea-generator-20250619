const { validationResult } = require('express-validator');
const Idea = require('../models/Idea');
const { generateIdeas } = require('../services/openaiService');

// Generate new content ideas
exports.generateIdeas = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { contentType, niche, tone, count = 3 } = req.body;

  try {
    // In a real implementation, this would call OpenAI API
    // For now, we'll mock the response
    const ideas = await generateIdeas(contentType, niche, tone, count);

    res.json({ ideas });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error generating ideas' });
  }
};

// Get all saved ideas for a user
exports.getIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find({ user: req.user.userId }).sort({ createdAt: -1 });
    res.json({ ideas });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Save a new idea
exports.saveIdea = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description, type, keywords, status, scheduledDate } = req.body;

  try {
    const idea = new Idea({
      user: req.user.userId,
      title,
      description,
      type,
      keywords,
      status,
      scheduledDate
    });

    await idea.save();
    res.status(201).json({ idea });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update an idea
exports.updateIdea = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description, type, keywords, status, scheduledDate } = req.body;

  try {
    let idea = await Idea.findById(req.params.id);

    if (!idea) {
      return res.status(404).json({ message: 'Idea not found' });
    }

    // Check idea belongs to user
    if (idea.user.toString() !== req.user.userId) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    // Update fields
    idea.title = title || idea.title;
    idea.description = description || idea.description;
    idea.type = type || idea.type;
    idea.keywords = keywords || idea.keywords;
    idea.status = status || idea.status;
    idea.scheduledDate = scheduledDate || idea.scheduledDate;

    await idea.save();
    res.json({ idea });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete an idea
exports.deleteIdea = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);

    if (!idea) {
      return res.status(404).json({ message: 'Idea not found' });
    }

    // Check idea belongs to user
    if (idea.user.toString() !== req.user.userId) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await idea.remove();
    res.json({ message: 'Idea removed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
