const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
 //initialize variable called token
    let token
//check authorizatin object, and check if it starts with baearer 
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            //get token from header
            // the split will create an array where the bearer will be index 0, and token is index 1
            token = req.headers.authorization.split(" ")[1]

            //verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //get user from the token because it has the user id and assign it to req.user so all routes are protected
            req.user = await User.findById(decoded.id).select("-password")
            next()
    }
    catch(error) {
        console.log(error)
        res.status(401)
        throw new Error("Not authorized")
    }
}
    if (!token) {
        res.status(401)
        throw new Error("Not authorized, no token")
    }
})

module.exports = {protect}
