const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const ideasController = require('../controllers/ideasController');
const auth = require('../middleware/auth');

// POST /api/ideas/generate - Generate new content ideas
router.post(
  '/generate',
  auth,
  [
    check('contentType', 'Content type is required').isIn(['blog', 'video', 'social']),
    check('niche', 'Niche is required').not().isEmpty()
  ],
  ideasController.generateIdeas
);

// GET /api/ideas - Get all saved ideas for a user
router.get('/', auth, ideasController.getIdeas);

// POST /api/ideas - Save a new idea
router.post(
  '/',
  auth,
  [
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('type', 'Type is required').isIn(['blog', 'video', 'social'])
  ],
  ideasController.saveIdea
);

// PUT /api/ideas/:id - Update an idea
router.put('/:id', auth, ideasController.updateIdea);

// DELETE /api/ideas/:id - Delete an idea
router.delete('/:id', auth, ideasController.deleteIdea);

module.exports = router;
