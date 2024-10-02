const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'task title is required']
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending'
    },
    dueDate: {
        type: Data,
        required: [true, 'Due date is required']
    }
})


const Task = mongoose.model('Task', taskSchema);
module.exports = Task