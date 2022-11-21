const express = require("express")
const router = express.Router()
const {getGoals, updateGoal, setGoal, deleteGoal} =require("../controllers/goalController")
//api routes
//another way to write read and create because they have the same stem
//router.route("/").get(getGoals).post(setGoal) //then remove the read and create lines
//another way to write read and create because they have the same stem

//router.route("/:id").get(updateGoals).post(deleteGoal)//delete update and delete lines

//Read
router.get("/", getGoals)
//Create
router.post("/", setGoal)

//Update
router.put("/:id", updateGoal)
//Delete
router.delete("/:id", deleteGoal)

module.exports = router