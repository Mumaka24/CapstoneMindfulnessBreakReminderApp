const Reminder = require('../models/Reminder');

// Create a Reminder
const createReminder = async (req, res) => {
    const { userId, message, time, type } = req.body;

    try {
        const reminder = await Reminder.create({
            user: userId,
            message,
            time,
            type,
        });

        res.status(201).json(reminder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Reminders for a User
const getUserReminders = async (req, res) => {
    const { userId } = req.params;

    try {
        const reminders = await Reminder.find({ user: userId });
        res.json(reminders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a Reminder
const updateReminder = async (req, res) => {
    const { id } = req.params;
    const { message, time, type } = req.body;

    try {
        const reminder = await Reminder.findByIdAndUpdate(
            id,
            { message, time, type },
            { new: true }
        );

        if (!reminder) {
            return res.status(404).json({ message: 'Reminder not found' });
        }

        res.json(reminder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a Reminder
const deleteReminder = async (req, res) => {
    const { id } = req.params;

    try {
        const reminder = await Reminder.findByIdAndDelete(id);

        if (!reminder) {
            return res.status(404).json({ message: 'Reminder not found' });
        }

        res.json({ message: 'Reminder deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createReminder,
    getUserReminders,
    updateReminder,
    deleteReminder,
};
