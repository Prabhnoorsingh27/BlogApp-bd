const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = ()=>{
    mongoose.connect(process.env.DATABASE_URL ,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("DB Connection is successful"))
    .catch((error)=>{
        console.log("DB facing connection issues")
        console.log(error);
        process.exit(1);
    })
}

module.exports = connectDB;