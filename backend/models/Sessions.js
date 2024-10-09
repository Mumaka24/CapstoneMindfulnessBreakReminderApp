// models/Session.js
const mongoose = require('mongoose');

// Define the Session schema
const sessionSchema = new mongoose.Schema({
  userId: {
    type: Number,
    ref: 'User',
    required: true,  // Reference to the user who owns this session
  },
  sessionStart: {
    type: Date,
    default: Date.now,  // Automatically set when session starts
    required: true,
  },
  sessionEnd: {
    type: Date,  // Will be set when session ends
  },
  sessionDuration: {
    type: Number,  // Duration in minutes
    default: 0,  // Will be calculated when the session ends
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update the `updatedAt` field before each save
sessionSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Method to calculate session duration when session ends
sessionSchema.methods.endSession = function () {
  this.sessionEnd = Date.now();
  const durationInMs = this.sessionEnd - this.sessionStart;
  this.sessionDuration = Math.floor(durationInMs / (1000 * 60));  // Convert ms to minutes
};

// Create and export the Session model
const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;
