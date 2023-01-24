import mongoose from 'mongoose'; 

const UserSchema = new mongoose.Schema ({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profileImage: {
        type: File, 
        required: true
    }
})

module.exports = User = mongoose.model("user", UserSchema)