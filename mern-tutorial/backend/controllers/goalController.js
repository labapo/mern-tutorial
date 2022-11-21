const asyncHandler = require("express-async-handler")
//@desc Get Goals
//@route GET/api/goals
//@access Private after authentication
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get goals'})
})

//@desc Set Goals
//@route POST /api/goals
//@access Private after authentication
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }
    res.status(200).json({message: 'Set Goals'})
})

//@desc Update Goals
//@route PUT /api/goals/:id
//@access Private after authentication
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`})
})

//@desc Delete Goals
//@route DELETE /api/goals/:id
//@access Private after authentication
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`})
})

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}