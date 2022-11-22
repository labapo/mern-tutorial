const express = require("express")
const router = express.Router()
const {getGoals, updateGoal, setGoal, deleteGoal} =require("../controllers/goalController")

const {protect} = require("../middleware/authMiddleware")
//api routes
//another way to write read and create because they have the same stem
router.route("/").get(protect, getGoals).post(protect, setGoal) //then remove the read and create lines
//another way to write read and create because they have the same stem
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal)//delete update and delete lines

// //long way to write it
// //Read
// router.get("/", (getGoals))
// //Create
// router.post("/", (setGoal))

// //Update
// router.put("/:id", updateGoal)
// //backend/server.js//Delete
// router.delete("/:id", deleteGoal)

module.exports = router