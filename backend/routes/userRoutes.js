const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// CREATE a new user (register)
router.post('/register', userController.createUser);

// LOGIN a user
router.post('/login', userController.loginUser);

// GET user details by ID
router.get('/:id', userController.getUserById);

// UPDATE user details by ID
router.put('/:id', userController.updateUser);

// DELETE a user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
