const Session = require('../models/Sessions');

// Create a Session
const createSession = async (req, res) => {
    const { userId, duration, type } = req.body;

    try {
        const session = await Session.create({
            user: userId,
            duration,
            type,
        });

        res.status(201).json(session);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Sessions for a User
const getUserSessions = async (req, res) => {
    const { userId } = req.params;

    try {
        const sessions = await Session.find({ user: userId });
        res.json(sessions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createSession, getUserSessions };
