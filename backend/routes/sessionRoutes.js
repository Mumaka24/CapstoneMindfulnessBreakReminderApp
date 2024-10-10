const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');

// CREATE a new session
router.post('/', sessionController.createSession);

// READ all sessions
router.get('/', sessionController.getAllSessions);

// READ a single session by ID
router.get('/:id', sessionController.getSessionById);

// UPDATE a session by ID
router.put('/:id', sessionController.updateSession);

// DELETE a session by ID
router.delete('/:id', sessionController.deleteSession);

module.exports = router;
