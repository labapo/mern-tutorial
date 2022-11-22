const mongoose = require("mongoose")

const goalSchema = mongoose.Schema (
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,// you want this type to be an object with an ID
            required: true, 
            ref: 'User', //a user is associated with the goal
        },
        text: {
        type: String, 
        required: [true, "Please add a text value"]
        },
    },
    {
    timestamps: true,
    })

module.exports = mongoose.model("Goal", goalSchema)