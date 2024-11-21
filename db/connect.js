const mongoose = require('mongoose');

const connectDB = (url)=>{
    mongoose.connect(url, { dbName: "Task-Manager"});
}

module.exports = connectDB;