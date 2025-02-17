const express = require("express");
const {getUsers, getUserByEmail, updateUserIntro} = require("../controller/userController");


const router = express.Router();

router.get("/", getUsers);
router.get("/:email", getUserByEmail); //: means input
router.put("/:email/intro", updateUserIntro)

module.exports = router;