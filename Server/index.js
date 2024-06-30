const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/test'); 

const db = mongoose.connection;
db.on('error', (err) => {
    console.error('Failed to connect to MongoDB:', err);
});
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.get('/get', async (req, res) => {
    try {
        const todos = await TodoModel.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/add', async (req, res) => {
    try {
        const { task } = req.body;
        const newTodo = await TodoModel.create({ task });
        res.json(newTodo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
