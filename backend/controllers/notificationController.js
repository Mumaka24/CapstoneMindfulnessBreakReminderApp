// NotificationController.js
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
const getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ a single notification by ID
const getNotificationById = async (req, res) => {
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
  getAllNotifications,
  getNotificationById,
  updateNotification,
  deleteNotification
};





// // const Notification = require('../models/Notification');

// // Fetch all notifications
// const fetchNotifications = async (req, res) => {
//     try {
//     const notifications = await Notification.find();
//     res.json({notification:notifications });
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching notifications' });
//   }
// };

// // Fetch a single notification by ID
// const fetchNotification = async (req, res) => {
//   try {
//     const notificationId = req.params.id;
//     const notification = await Notification.findById(notificationId);

//     if (!notification) {
//       return res.status(404).json({ error: 'Notification not found' });
//     }

//     res.json({ notification });
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching notification' });
//   }
// };

// // Create a new notification
// const createNotification = async (req, res) => {
//   try {
//     const { title, body } = req.body;
//     const notification = await Notification.create({ title, body });
//     res.status(201).json({ notification });
//   } catch (error) {
//     res.status(500).json({ error: 'Error creating notification' });
//   }
// };

// // Update an existing notification by ID
// const updateNotification = async (req, res) => {
//   try {
//     const notificationId = req.params.id;
//     const { title, body } = req.body;

//     const notification = await Notification.findByIdAndUpdate(
//       notificationId,
//       { title, body },
//       { new: true } // Return the updated document
//     );

//     if (!notification) {
//       return res.status(404).json({ error: 'Notification not found' });
//     }

//     res.json({ notification });
//   } catch (error) {
//     res.status(500).json({ error: 'Error updating notification' });
//   }
// };

// // Delete a notification by ID
// const deleteNotification = async (req, res) => {
//   try {
//     const notificationId = req.params.id;
//     const deleted = await Notification.findByIdAndDelete(notificationId);

//     if (!deleted) {
//       return res.status(404).json({ error: 'Notification not found' });
//     }

//     res.json({ success: 'Notification deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Error deleting notification' });
//   }
// };

// module.exports = {
//   fetchNotification,
//   fetchNotifications,
//   createNotification,
//   updateNotification,
//   deleteNotification,
// };
 



// // Send a notification
// const sendNotification = async (req, res) => {
//   // Code to send notification


// // Get all notifications for a user
// const getUserNotifications = async (req, res) => {
//   // Code to fetch notifications for a user
// };

// // Mark a notification as read
// const markNotificationRead = async (req, res) => {
//   // Code to mark notification as read or dismissed
// };

// module.exports = { sendNotification, getUserNotifications, markNotificationRead };


