const express = require('express');
const router = express.Router()
const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController')
const { protect } = require("../middleware/authMiddleware")

//public routes
router.get('/tasks', protect, getTasks)
router.post('/tasks', protect, createTask)

//task by id routes
router.get('/tasks/:id', protect, getTaskById)
router.get('/tasks/:id', protect, updateTask)
router.delete('/tasks/:id', protect, deleteTask)

module.exports = router