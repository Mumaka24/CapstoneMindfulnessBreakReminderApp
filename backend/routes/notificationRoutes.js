// routes/notificationRoutes.js
const express = require('express');
const router = express.Router();
const {
  createNotification,
  getAllNotifications,
  getNotificationById,
  updateNotification,
  deleteNotification
} = require('../controllers/notificationController');

// Route for creating a notification
router.post('/', createNotification);

// Route for getting all notifications
router.get('/', getAllNotifications);

// Route for getting a single notification by ID
router.get('/:id', getNotificationById);

// Route for updating a notification by ID
router.put('/:id', updateNotification);

// Route for deleting a notification by ID
router.delete('/:id', deleteNotification);

module.exports = router;
require('dotenv').config();
const Notification = require('../models/Notification');

// CREATE a new notification
const createNotification = async (req, res) => {
  try {
    const notification = new Notification(req.body);
    await notification.save();
    res.status(201).json(notification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// READ all notifications
const fetchNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ a single notification by ID
const fetchNotification = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (!notification) return res.status(404).json({ message: 'Notification not found' });
    res.json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE a notification by ID
const updateNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!notification) return res.status(404).json({ message: 'Notification not found' });
    res.json(notification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE a notification by ID
const deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id);
    if (!notification) return res.status(404).json({ message: 'Notification not found' });
    res.json({ message: 'Notification deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createNotification,
  fetchNotifications,
  fetchNotification,
  updateNotification,
  deleteNotification
};
