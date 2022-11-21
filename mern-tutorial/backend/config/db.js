//connect to mongodb by using mongoose
const mongoose = require("mongoose")

//create a function because all mongoose promoises are async
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB