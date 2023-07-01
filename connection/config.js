const mongoose = require('mongoose');
const uri = process.env.MONGO_URL
    // 1. Connect to MongoDB Atlas
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });