const express = require('express');
const router = express.Router();
const reminderController = require('../controllers/reminderController');

// CREATE a new reminder
router.post('/', reminderController.createReminder);

// READ all reminders
router.get('/', reminderController.getAllReminders);

// READ a single reminder by ID
router.get('/:id', reminderController.getReminderById);

// UPDATE a reminder by ID
router.put('/:id', reminderController.updateReminder);

// DELETE a reminder by ID
router.delete('/:id', reminderController.deleteReminder);

module.exports = router;
