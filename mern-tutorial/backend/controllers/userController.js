const jwt = require("jsonwebtoken")//this is for authentication
const bcrypt = require("bcryptjs")//hash the passwords
const asyncHandler = require('express-async-handler')
const User = require("../models/userModel")

//@desc Register New User
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password) {
        res.status(400)
        throw new Error("Please add all fields")
    }
    //check if user exists
    const userExists = await User.findOne({email})
    if(userExists){
        //register an error
        res.status(400)
        throw new Error("User already exists")
    }
    //hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    //create the user
    const user = await User.create({
        name, 
        email, 
        password: hashedPassword
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else{
        res.status(400)
        throw new Error ("Invalid user data")
    }
})

//@desc Authenticate (login) New User
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async(req, res) => {
    res.json({message: "Login User"})
})

//@desc Get user data
//@route GET /api/users/me
//@access Public
const getMe = asyncHandler(async (req, res) => {
    res.json({message: "Display user data"})
})

module.exports = {
    registerUser,
    loginUser, 
    getMe,
}