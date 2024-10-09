// models/Reminder.js
const mongoose = require('mongoose');

// Define the Reminder schema
const reminderSchema = new mongoose.Schema({
  userId: {
    type: String,
    ref: 'User',
    required: true,  // Reference to the user who owns this reminder
  },
  type: {
    type: String,
    enum: ['break', 'hydration', 'exercise'],
    default: 'break',
    required: true,
  },
  message: {
    type: String,
    default: 'Time for a break!',  // Default reminder message
  },
  time: {
    type: Date,
    // Time at which the reminder is scheduled
  },
  repeat: {
    type: String,
    enum: ['none', 'daily', 'weekly'],
    default: 'none',  // Repeat option for the reminder
  },

}, {timestamps:true});

// Middleware to update the `updatedAt` field before each save
reminderSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create and export the Reminder model
const Reminder = mongoose.model('Reminder', reminderSchema);
module.exports = Reminder;
