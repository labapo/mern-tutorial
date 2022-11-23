const dotenv = require("dotenv").config()//allows us to have a .env file with variables in it 
//bring express and environment variables
const express = require("express")
const colors = require("colors")
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require('./config/db')
const port = process.env.PORT || 5000//port we want our server to listen on

connectDB()
const app = express()

//middleware
//ask about this later, these two lines were after app.use(api/goals, require....)
//When I did that, the post didn't work. Why? 
//to use the body in our app
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//api/goals will send to the goal routes js and we exported all the goal routes
app.use("/api/goals", require("./routes/goalRoutes"))
//for the user routes
app.use("/api/users", require("./routes/userRoutes"))

app.use(errorHandler)

//takes in a port number
app.listen(port, () => console.log(`Server started on port ${port}`))