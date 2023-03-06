const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const { response } = require('express');

dotenv.config();
mongoose.connect(process.env.MONGO_URL);

const app = express();

app.get('/test', (req,res) => {
    res.json('test ok');
});

app.post('/register', async (req,res) => {
    const {username,password} = req.body;
    await User.create({username,password});
    res.json();
});

app.listen(4000);


// ps KBHsEGrV3VeXMuJ1 // us mernchat




