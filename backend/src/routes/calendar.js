const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Mock calendar routes for now
// GET /api/calendar - Get user's content calendar
router.get('/', auth, (req, res) => {
  // This would fetch from a real database in production
  const mockCalendar = [
    {
      id: '1',
      title: 'Publish blog post on AI trends',
      date: '2025-06-25T10:00:00Z',
      status: 'scheduled'
    },
    {
      id: '2',
      title: 'Record video tutorial',
      date: '2025-06-27T14:00:00Z',
      status: 'draft'
    },
    {
      id: '3',
      title: 'Instagram post series on tech tips',
      date: '2025-06-30T09:00:00Z',
      status: 'scheduled'
    }
  ];
  
  res.json({ calendar: mockCalendar });
});

// POST /api/calendar - Add item to calendar
router.post('/', auth, (req, res) => {
  // This would save to a real database in production
  const newItem = {
    id: Date.now().toString(),
    ...req.body,
    status: req.body.status || 'draft'
  };
  
  res.status(201).json({ calendarItem: newItem });
});

// PUT /api/calendar/:id - Update calendar item
router.put('/:id', auth, (req, res) => {
  // This would update in a real database in production
  res.json({ 
    calendarItem: {
      id: req.params.id,
      ...req.body
    }
  });
});

// DELETE /api/calendar/:id - Remove calendar item
router.delete('/:id', auth, (req, res) => {
  // This would delete from a real database in production
  res.json({ message: 'Calendar item removed' });
});

module.exports = router;
