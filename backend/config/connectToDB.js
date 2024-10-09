require('dotenv').config() 
const mongoose = require ('mongoose') 
 
const connectToDB = async () => { 
    await mongoose.connect(process.env.DB_URL) 
    console.log ("Database connected") 
} 
 
module.exports = connectToDB 