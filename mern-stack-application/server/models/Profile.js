import mongoose from 'mongoose'; 

const ProfileSchema = new mongoose.Schema ({
    user: {
        //connects the user model by ID
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user"
    }, 
    linkedin: {
        type: String,
        required: true
    },
    facebook: {
        type: String
    },
    instagram: {
        type: String
    },
    twitter: {
        type: String
    },
    tiktok: {
        type: String
    },
    reddit: {
        type: String
    },
    soundCloud: {
        type: String
    },
    flickr: {
        type: String
    },
    personalWebsite: {
        type: String
    }
})