const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongo:27017/messages';
const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB error:', err));

const MessageSchema = new mongoose.Schema({
    text: String,
});
const Message = mongoose.model('Message', MessageSchema);
app.get('/messages', async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
});
app.post('/messages', async (req, res) => {
    const message = new Message({ text: req.body.text });
    await message.save();
    res.json(message);
});
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});