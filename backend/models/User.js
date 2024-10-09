const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SALT_ROUNDS = 6;
const bcrypt = require('bcrypt');
// Define the User schema
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    preferences: {
      breakInterval: {
        type: Number, // in minutes
        default: 60,  // default interval between breaks
      },
      reminderType: {
        type: String,
        enum: ['break', 'hydration', 'exercise'],
        default: 'break',
      },
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
  
  // Middleware to hash password before saving
  userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      return next();
    }
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (err) {
      next(err);
    }
  });
  
  // Method to compare password during login
  userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  };
  
  // Create and export the User model
  const User = mongoose.model('User', userSchema);
  module.exports = User;