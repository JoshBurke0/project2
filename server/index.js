const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userModel = require('./models/userModel');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// The "Hello World" Route
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from the MERN Server!" });
});

app.get('/api/getusers', (req, res) => {

  userModel.find({}).then((users) => {
    res.send(users)
  })
})



app.post('/api/newUser', (req, res) => {
  console.log(req.body.body)

  let user = new userModel({
    title: req.body.body.title
  })

  res.send("finished")
})


// Database Connection
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log("DB Connection Error:", err));